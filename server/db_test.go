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
		Password:     "",
		Port:         1024,
		Host:         "",
		Reset:        false,
		ReconnectSec: time.Second * 3,
	}

	assert.Equal(t, common.ErrDBEmptyHost, dbConf.validate())
	dbConf.Host = "db_host"

	assert.Equal(t, common.ErrDBInvalidPort, dbConf.validate())
	dbConf.Port = 1025

	assert.Equal(t, common.ErrDBEmptyUsername, dbConf.validate())
	dbConf.Username = "db_username"

	assert.Equal(t, common.ErrDBEmptyPassword, dbConf.validate())
	dbConf.Password = "db_password"

	assert.Equal(t, common.ErrDBEmptyDatabase, dbConf.validate())
	// dbConf.Database = "db_name"

	assert.NoError(t, dbConf.validate())
}
