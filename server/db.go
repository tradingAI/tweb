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

// CreateTables create all tables
func (s *Server) CreateTables(values ...interface{}) (err error) {
	errs := s.DB.CreateTable(values...).GetErrors()
	if len(errs) != 0 {
		for _, err := range errs {
			glog.Error(err)
		}
		return
	}

	return
}

// DropTables drop all tables
func (s *Server) DropTables(values ...interface{}) (err error) {
	errs := s.DB.DropTableIfExists(values...).GetErrors()
	if len(errs) != 0 {
		for _, err := range errs {
			glog.Error(err)
		}
		return
	}

	return
}

// ResetTables drop and create tables
func (s *Server) ResetTables(values ...interface{}) (err error) {
	if err = s.DropTables(values...); err != nil {
		glog.Error(err)
		return
	}

	if err = s.CreateTables(values...); err != nil {
		glog.Error(err)
		return
	}

	return
}
