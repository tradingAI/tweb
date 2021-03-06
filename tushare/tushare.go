package tushare

import (
	"os"

	"github.com/golang/glog"
	"github.com/tradingAI/tweb/common"
)

type TuShare struct {
	URL   string
	Token string
}

func New() (t *TuShare, err error) {
	url, has := os.LookupEnv("TUSHARE_API")
	if !has {
		err = common.ErrTushareURL
		glog.Error(err)
		return
	}

	token, has := os.LookupEnv("TUSHARE_TOKEN")
	if !has {
		err = common.ErrTushareToken
		glog.Error(err)
		return
	}

	t = &TuShare{
		URL:   url,
		Token: token,
	}

	return
}
