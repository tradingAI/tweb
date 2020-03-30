package server

import (
	"net/http"

	"github.com/golang/glog"
	"github.com/gorilla/mux"
	"github.com/tradingAI/go/web"
)

func (s *Server) handleFrontend(router *mux.Router) {
	router.PathPrefix(`/`).HandlerFunc(s.frontend).Methods("GET")
}

func (s *Server) frontend(w http.ResponseWriter, r *http.Request) {
	html, err := s.Frontend.FindString("index.html")
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}
	w.Header().Set("Content-Type", "text/html")
	w.Write([]byte(html))
}
