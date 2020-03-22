package server

import (
	"fmt"
	"time"

	"github.com/golang/glog"
	"github.com/jinzhu/gorm"
	"github.com/tradingAI/tweb/common"

	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type DBConf struct {
	Database     string        `yaml:"database"`
	Username     string        `yaml:"username"`
	Password     string        `yaml:"password"`
	Port         int           `yaml:"port"`
	Host         string        `yaml:"host"`
	Reset        bool          `yaml:"reset"`
	ReconnectSec time.Duration `yaml:"reconnect_sec"`
}

func (c *DBConf) validate() (err error) {
	if c.Host == "" {
		err = common.ErrDBEmptyHost
		glog.Error(err)
		return
	}

	if c.Port <= 1024 || c.Port >= 65535 {
		err = common.ErrDBInvalidPort
		glog.Error(err)
		return
	}

	if c.Username == "" {
		err = common.ErrDBEmptyUsername
		glog.Error(err)
		return
	}

	if c.Password == "" {
		err = common.ErrDBEmptyPassword
		glog.Error(err)
		return
	}

	if c.Database == "" {
		err = common.ErrDBEmptyDatabase
		glog.Error(err)
		return
	}

	return
}

func NewPostgreSQL(conf DBConf) (db *gorm.DB, err error) {
	db, err = gorm.Open("postgres",
		fmt.Sprintf("host=%s port=%d user=%s dbname=%s sslmode=disable password=%s",
			conf.Host,
			conf.Port,
			conf.Username,
			conf.Database,
			conf.Password))

	if err != nil {
		glog.Error(err)
		return
	}

	db.DB().SetMaxIdleConns(10)
	db.DB().SetMaxOpenConns(100)

	return
}

func (s *Server) autoReConnectDB() (err error) {
	for {
		if s.DB.DB().Ping() != nil {
			s.DB, err = NewPostgreSQL(s.Conf.DB)
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
