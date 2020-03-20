package server

import (
	"net/http"
	"time"

	"github.com/golang/glog"
	"github.com/gorilla/mux"
	"github.com/tradingAI/go/utils/io"
	"github.com/tradingAI/go/utils/web"
	"github.com/tradingAI/tweb/proto"
)

type Conf struct {
	DB               DBConf   `yaml:"db"`
	CROSAllowOrigins []string `yaml:"cros_allow_origins"`
	StorageDir       string   `yaml:"storage_dir"`
	Web              struct {
		Port int `yaml:"port"`
		// Timeout config
		WriteTimeoutInSec time.Duration `yaml:"write_timeout_sec"`
		ReadTimeoutInSec  time.Duration `yaml:"read_timeout_sec"`
		ReadHeaderTimeout time.Duration `yaml:"read_header_timeout_sec"`
		IdleTimeoutInSec  time.Duration `yaml:"idle_timeout_sec"`
		ShutdownWaitInSec time.Duration `yaml:"shutdown_wait_sec"`
	} `yaml:"web"`
	CreateAdmin bool      `yaml:"create_admin"`
	Admin       Admin     `yaml:"admin"`
	Record      Record    `yaml:"record"`
	Minio       MinioConf `yaml:"minio"`
}

type Admin struct {
	Username string `yaml:"username"`
	Password string `yaml:"password"`
}

type Record struct {
	Code string `yaml:"code"`
	URL  string `yaml:"url"`
}

// LoadConf load config from yaml
func LoadConf(yamlPath string) (conf Conf, err error) {
	if err = io.LoadYAML(yamlPath, &conf); err != nil {
		glog.Error(err)
		return
	}

	if err = conf.Validate(); err != nil {
		glog.Error(err)
		return
	}

	return
}

func (c *Conf) Validate() (err error) {
	if err = c.DB.validate(); err != nil {
		glog.Info(err)
		return
	}

	if err = c.Minio.validate(); err != nil {
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
