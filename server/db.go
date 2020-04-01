package server

import (
	"time"

	"github.com/golang/glog"

	_ "github.com/jinzhu/gorm/dialects/postgres"
	pg "github.com/tradingAI/go/db/postgres"
)

func (s *Server) autoReConnectDB() (err error) {
	for {
		if s.DB.DB().Ping() != nil {
			s.DB, err = pg.NewPostgreSQL(s.Conf.DB)
			if err != nil {
				glog.Error(err)
			}
		}
		time.Sleep(time.Second * s.Conf.DB.ReconnectSec)
	}
}
