package server

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/tradingAI/tweb/common"
)

func TestValidate(t *testing.T) {
	dbConf := &DBConf{
		Database:     "",
		Username:     "",
		Password:     "db_password",
		Port:         1024,
		Host:         "",
		Reset:        false,
		ReconnectSec: time.Second * 3,
	}

	assert.Error(t, common.ErrDBEmptyHost, dbConf.validate())
	dbConf.Host = "db_host"

	assert.Error(t, common.ErrDBInvalidPort, dbConf.validate())
	dbConf.Port = 1025

	assert.Error(t, common.ErrDBEmptyUsername, dbConf.validate())
	dbConf.Username = "db_username"

	assert.Error(t, common.ErrDBEmptyPassword, dbConf.validate())
	dbConf.Password = "db_password"

	assert.Error(t, common.ErrDBEmptyDatabase, dbConf.validate())
	dbConf.Database = "db_name"

}
