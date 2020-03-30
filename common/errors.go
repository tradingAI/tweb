package common

import (
	"fmt"
)

type errScope string

const (
	errUnknown errScope = ""
	errConf             = "conf_error"
	errSession          = "session_error"
	errLogin            = "login_error"
	errAccount          = "account_error"
	errTushare          = "tushare_error"
)

var (
	// Conf error
	ErrEmptyStorageDir = makeError(errConf, "storage dir is empty")
	ErrInvalidWebPort  = makeError(errConf, "invalid Port")

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
)

func makeError(scope errScope, msg ...string) error {
	return fmt.Errorf("[%s]: %s", scope, msg)
}
