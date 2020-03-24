package server

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/NYTimes/gziphandler"
	packr "github.com/gobuffalo/packr/v2"
	"github.com/golang/glog"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"github.com/minio/minio-go/v6"
	"github.com/rs/cors"
	"github.com/tradingAI/go/utils/web"
	m "github.com/tradingAI/tweb/server/model"
	"github.com/tradingAI/tweb/tushare"
)

const publicURLPrefix = "/public/"

type Server struct {
	HTTPHandler http.Handler
	Frontend    *packr.Box
	Conf        Conf
	DB          *gorm.DB
	TuShare     *tushare.TuShare
	Minio       *minio.Client
}

func New(conf Conf, frontend *packr.Box) (s *Server, err error) {
	// make server
	s = &Server{
		Conf:     conf,
		Frontend: frontend,
	}

	// Init db
	s.DB, err = NewPostgreSQL(conf.DB)
	if err != nil {
		glog.Error(err)
		return
	}

	// Drop and Recreate db tables
	if conf.DB.Reset {
		if err = s.ResetTables(&m.Session{}, &m.User{}, &m.Model{}); err != nil {
			glog.Error(err)
			return
		}
	}

	// Create admin
	if conf.CreateAdmin {
		if err = s.CreateUser(conf.Admin.Username, conf.Admin.Password, m.RoleAdmin); err != nil {
			glog.Error(err)
			return
		}
	}

	// Init tushare client
	s.TuShare, err = tushare.New()
	if err != nil {
		glog.Error(err)
		return
	}

	s.Minio, err = NewMinioClient(s.Conf.Minio)
	if err != nil {
		glog.Error(err)
		return
	}

	// setup router
	s.setupRouter()

	return
}

func (s *Server) setupRouter() {
	root := mux.NewRouter()
	root.Use(s.logMiddleware)

	// add a 404 handler for better logging
	root.NotFoundHandler = &notFoundHandler{}
	root.MethodNotAllowedHandler = &methodNotAllowedHandler{}

	// APIs not requiring auth
	s.handlePing(root)
	s.handleSessionPublic(root)
	s.handleConf(root)

	// APIs requiring auth
	authedRouter := root.NewRoute().Subrouter()
	authedRouter.Use(s.authMiddleware)

	s.handleSession(authedRouter)
	s.handleAccount(authedRouter)
	s.handleStock(authedRouter)
	s.handleModel(authedRouter)

	// public
	root.PathPrefix(publicURLPrefix).Handler(gziphandler.GzipHandler(http.StripPrefix(publicURLPrefix, http.FileServer(http.Dir(s.Conf.StorageDir)))))

	// anno frontend
	root.PathPrefix("/static/").Handler(http.FileServer(s.Frontend))
	root.PathPrefix("/favicon.ico").Handler(http.FileServer(s.Frontend))
	root.PathPrefix("/manifest.json").Handler(http.FileServer(s.Frontend))
	root.PathPrefix("/{filename}.png").Handler(http.FileServer(s.Frontend))
	s.handleFrontend(root)

	// setup CORS
	handler := cors.New(cors.Options{
		AllowedMethods:   []string{http.MethodHead, http.MethodGet, http.MethodPost, http.MethodPut, http.MethodPatch, http.MethodDelete},
		AllowedOrigins:   s.Conf.CROSAllowOrigins,
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	}).Handler(root)

	s.HTTPHandler = handler
}

func (s *Server) StartOrDie() (err error) {
	srv := &http.Server{
		Addr:    fmt.Sprintf(":%d", s.Conf.Web.Port),
		Handler: s.HTTPHandler,
	}

	glog.Infof("HTTP server listening on: %d", s.Conf.Web.Port)
	if err = srv.ListenAndServe(); err != nil {
		glog.Error(err)
		return
	}

	// auto reconnected db
	go s.autoReConnectDB()

	// Graceful shutdown http service.
	go func() {
		glog.Infof("server listening on :%d", s.Conf.Web.Port)
		if err := srv.ListenAndServe(); err != nil {
			if err != http.ErrServerClosed {
				glog.Fatal(err)
			}
		}
	}()
	c := make(chan os.Signal, 1)

	// We'll accept graceful shutdowns when quit via SIGINT (Ctrl+C)
	// SIGKILL, SIGQUIT or SIGTERM (Ctrl+/) will not be caught.
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*s.Conf.Web.ShutdownWaitInSec)
	defer cancel()

	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	srv.Shutdown(ctx)

	glog.Infof("shutting down")
	glog.Flush()
	os.Exit(0)

	return
}

func (s *Server) Free() {
	if err := s.DB.Close(); err != nil {
		glog.Warning(err)
	}
	return
}

type notFoundHandler struct {
}

func (h *notFoundHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	glog.Infof("404: %s %s", r.Method, r.RequestURI)
	web.NotFound(w)
}

type methodNotAllowedHandler struct {
}

func (h *methodNotAllowedHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	glog.Infof("405: %s %s", r.Method, r.RequestURI)
	http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
}
