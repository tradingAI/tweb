package server

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	pg "github.com/tradingAI/go/db/postgres"
	err2 "github.com/tradingAI/go/error"
)

func TestValidate(t *testing.T) {
	dbConf := &pg.DBConf{
		Database:     "",
		Username:     "",
		Password:     "",
		Port:         1024,
		Host:         "",
		Reset:        false,
		ReconnectSec: time.Second * 3,
	}

	assert.Equal(t, err2.ErrEmptyDBHost, dbConf.Validate())
	dbConf.Host = "db_host"

	assert.Equal(t, err2.ErrInvalidDBPort, dbConf.Validate())
	dbConf.Port = 1025

	assert.Equal(t, err2.ErrEmptyDBUsername, dbConf.Validate())
	dbConf.Username = "db_username"

	assert.Equal(t, err2.ErrEmptyDBPassword, dbConf.Validate())
	dbConf.Password = "db_password"

	assert.Equal(t, err2.ErrEmptyDBDatabase, dbConf.Validate())
	dbConf.Database = "db_name"

	assert.NoError(t, dbConf.Validate())
}
