package server

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	err2 "github.com/tradingAI/go/error"
)

func TestValidate(t *testing.T) {
	dbConf := &DBConf{
		Database:     "",
		Username:     "",
		Password:     "",
		Port:         1024,
		Host:         "",
		Reset:        false,
		ReconnectSec: time.Second * 3,
	}

	assert.Equal(t, err2.ErrEmptyDBHost, dbConf.validate())
	dbConf.Host = "db_host"

	assert.Equal(t, err2.ErrInvalidDBPort, dbConf.validate())
	dbConf.Port = 1025

	assert.Equal(t, err2.ErrEmptyDBUsername, dbConf.validate())
	dbConf.Username = "db_username"

	assert.Equal(t, err2.ErrEmptyDBPassword, dbConf.validate())
	dbConf.Password = "db_password"

	assert.Equal(t, err2.ErrEmptyDBDatabase, dbConf.validate())
	dbConf.Database = "db_name"

	assert.NoError(t, dbConf.validate())
}
