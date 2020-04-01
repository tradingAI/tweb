module github.com/tradingAI/tweb

go 1.13

require (
	github.com/NYTimes/gziphandler v1.1.1
	github.com/gobuffalo/packr/v2 v2.8.0
	github.com/golang/glog v0.0.0-20160126235308-23def4e6c14b
	github.com/gorilla/mux v1.7.4
	github.com/jinzhu/gorm v1.9.12
	github.com/minio/minio-go/v6 v6.0.50
	github.com/rs/cors v1.7.0
	github.com/stretchr/testify v1.5.1
	github.com/tradingAI/go v0.0.0-20200401080831-5aa0707a30db
	github.com/tradingAI/proto/gen/go/common v0.0.0-00010101000000-000000000000
	github.com/tradingAI/proto/gen/go/tweb v0.0.0-00010101000000-000000000000
)

replace github.com/tradingAI/proto/gen/go/tweb => ../proto/gen/go/tweb

replace github.com/tradingAI/proto/gen/go/common => ../proto/gen/go/common

replace github.com/tradingAI/proto/gen/go/model => ../proto/gen/go/model

replace github.com/tradingAI/proto/gen/go/scheduler => ../proto/gen/go/scheduler
