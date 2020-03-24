package common

import (
	"fmt"
)

type errScope string

const (
	errUnknown errScope = ""
	errConf             = "conf_error"
	errSession          = "session_error"
	errDB               = "db_error"
	errLogin            = "login_error"
	errAccount          = "account_error"
	errTushare          = "tushare_error"
	errMinio            = "minio_error"
)

var (
	// Conf error
	ErrEmptyStorageDir = makeError(errConf, "storage dir is empty")
	ErrInvalidWebPort  = makeError(errConf, "invalid Port")
	// DB error
	ErrEmptyDBUsername = makeError(errDB, "missing Username")
	ErrEmptyDBPassword = makeError(errDB, "missing Password")
	ErrEmptyDBHost     = makeError(errDB, "missing Host")
	ErrInvalidDBPort   = makeError(errDB, "invalid Port")
	ErrEmptyDBDatabase = makeError(errDB, "missing Database")

	// Login error
	ErrInvalidUsernameOrPassowrd = makeError(errLogin, "invalid username or password")

	// Account error
	ErrEmptyAccountUsernameOrPassowrd = makeError(errAccount, "username or password is empty")

	// Session error
	ErrAccessTokenNotFound = makeError(errSession, "Access-Token not found")

	// Tushare error
	ErrTushareURL                        = makeError(errTushare, "url is empty.")
	ErrTushareToken                      = makeError(errTushare, "token is empty.")
	ErrEmptyTushareCode                  = makeError(errTushare, "code is empty.")
	ErrTushareStockFieldsLen             = makeError(errTushare, "length of stock fields is not equal to headers.")
	ErrEmptyTushareDailyParams           = makeError(errTushare, "daily params is empty.")
	ErrUnknownTushareDailyFields         = makeError(errTushare, "unknown daily field.")
	ErrUnknownTushareConceptDetailFields = makeError(errTushare, "unknown concept detail field.")

	// Minio error
	ErrEmptyMinioAccessKey = makeError(errMinio, "access_key is empty")
	ErrEmptyMinioSecretKey = makeError(errMinio, "secret_key is empty")
	ErrEmptyMinioHost      = makeError(errMinio, "host is empty")
	ErrInvalidMinioPort    = makeError(errMinio, "port is invalid")
)

func makeError(scope errScope, msg ...string) error {
	return fmt.Errorf("[%s]: %s", scope, msg)
}
