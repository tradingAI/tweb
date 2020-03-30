package server

import (
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/golang/glog"
	"github.com/gorilla/mux"
	pg "github.com/tradingAI/go/db/postgres"
	minio "github.com/tradingAI/go/s3/minio"
	"github.com/tradingAI/go/web"
	proto "github.com/tradingAI/proto/gen/go/tweb"
	"github.com/tradingAI/tweb/common"
)

type Conf struct {
	DB               pg.DBConf
	CROSAllowOrigins []string
	StorageDir       string
	Web              WebConf
	CreateAdmin      bool
	Admin            Admin
	Record           Record
	Minio            minio.MinioConf
}

type WebConf struct {
	Port int
	// Timeout config
	WriteTimeoutInSec time.Duration
	ReadTimeoutInSec  time.Duration
	ReadHeaderTimeout time.Duration
	IdleTimeoutInSec  time.Duration
	ShutdownWaitInSec time.Duration
}

type Admin struct {
	Username string
	Password string
}

type Record struct {
	Code string
	URL  string
}

// LoadConf load config from env
func LoadConf() (conf Conf, err error) {
	dbReconnectSec, err := strconv.Atoi(os.Getenv("TWEB_POSTGRES_RECONNECT_SEC"))
	if err != nil {
		glog.Error(err)
		return
	}

	dbPort, err := strconv.Atoi(os.Getenv("TWEB_POSTGRES_PORT"))
	if err != nil {
		glog.Error(err)
		return
	}

	dbReset, err := strconv.ParseBool(os.Getenv("TWEB_POSTGRES_RESET"))
	if err != nil {
		glog.Error(err)
		return
	}

	port, err := strconv.Atoi(os.Getenv("TWEB_PORT"))
	if err != nil {
		glog.Error(err)
		return
	}

	createAdmin, err := strconv.ParseBool(os.Getenv("TWEB_CREATE_ADMIN"))
	if err != nil {
		glog.Error(err)
		return
	}

	minioPort, err := strconv.Atoi(os.Getenv("TWEB_MINIO_PORT"))
	if err != nil {
		glog.Error(err)
		return
	}

	minioSecure, err := strconv.ParseBool(os.Getenv("TWEB_MINIO_SECURE"))
	if err != nil {
		glog.Error(err)
		return
	}
	conf = Conf{
		DB: pg.DBConf{
			Database:     os.Getenv("TWEB_POSTGRES_DB"),
			Username:     os.Getenv("TWEB_POSTGRES_USER"),
			Password:     os.Getenv("TWEB_POSTGRES_PASSWORD"),
			Port:         dbPort,
			Host:         os.Getenv("TWEB_POSTGRES_HOST"),
			Reset:        dbReset,
			ReconnectSec: time.Duration(dbReconnectSec) * time.Second,
		},
		CROSAllowOrigins: []string{os.Getenv("TWEB_CROS_ALLOW_ORIGINS")},
		StorageDir:       os.Getenv("TWEB_STORAGE_DIR"),
		Web: WebConf{
			Port:              port,
			WriteTimeoutInSec: 10 * time.Second,
			ReadTimeoutInSec:  10 * time.Second,
			ReadHeaderTimeout: 10 * time.Second,
			IdleTimeoutInSec:  10 * time.Second,
			ShutdownWaitInSec: 10 * time.Second,
		},
		CreateAdmin: createAdmin,
		Admin: Admin{
			Username: os.Getenv("TWEB_ADMIN_USERNAME"),
			Password: os.Getenv("TWEB_ADMIN_PASSWORD"),
		},
		Record: Record{
			Code: os.Getenv("TWEB_PRECORD_CODE"),
			URL:  os.Getenv("TWEB_PRECORD_URL"),
		},
		Minio: minio.MinioConf{
			AccessKey: os.Getenv("TWEB_MINIO_ACCESS_KEY"),
			SecretKey: os.Getenv("TWEB_MINIO_SECRET_KEY"),
			Host:      os.Getenv("TWEB_MINIO_HOST"),
			Port:      minioPort,
			Secure:    minioSecure,
		},
	}

	if err = conf.Validate(); err != nil {
		glog.Error(err)
		return
	}

	return
}

func (c *Conf) Validate() (err error) {
	if c.StorageDir == "" {
		err = common.ErrEmptyStorageDir
		glog.Info(err)
		return
	}

	if c.Web.Port <= 1024 || c.Web.Port >= 65535 {
		err = common.ErrInvalidWebPort
		glog.Info(err)
		return
	}
	if err = c.DB.Validate(); err != nil {
		glog.Info(err)
		return
	}

	if err = c.Minio.Validate(); err != nil {
		glog.Error(err)
		return
	}
	return
}

func (s *Server) handleConf(router *mux.Router) {
	router.HandleFunc(`/conf/record/`, s.FetchRecord).Methods("GET")
}

func (s *Server) FetchRecord(w http.ResponseWriter, r *http.Request) {
	var resp proto.FetchRecordResponse

	resp.Url = s.Conf.Record.URL
	resp.Code = s.Conf.Record.Code

	web.RespondJSON(w, &resp)
	return

}
