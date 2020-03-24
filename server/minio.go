package server

import (
	"fmt"

	"github.com/golang/glog"
	"github.com/minio/minio-go/v6"
	"github.com/tradingAI/tweb/common"
)

type MinioConf struct {
	AccessKey string
	SecretKey string
	Host      string
	Port      int
	Secure    bool
}

func (m MinioConf) validate() (err error) {
	if m.AccessKey == "" {
		err = common.ErrEmptyMinioAccessKey
		glog.Error(err)
		return
	}

	if m.SecretKey == "" {
		err = common.ErrEmptyMinioSecretKey
		glog.Error(err)
		return
	}

	if m.Host == "" {
		err = common.ErrEmptyMinioHost
		glog.Error(err)
		return
	}

	if m.Port <= 1024 || m.Port >= 65535 {
		err = common.ErrInvalidMinioPort
		glog.Error(err)
		return
	}

	return
}

func NewMinioClient(conf MinioConf) (client *minio.Client, err error) {
	client, err = minio.New(
		fmt.Sprintf("%s:%d", conf.Host, conf.Port),
		conf.AccessKey,
		conf.SecretKey,
		conf.Secure)

	if err != nil {
		glog.Error(err)
		return
	}

	return
}

// MinioUpload ...
func (s *Server) MinioUpload(fp string, objName string, contentType string) (err error) {
	bucketName := "models"
	location := "us-east-1"

	exists, err := s.Minio.BucketExists(bucketName)
	if err != nil {
		glog.Error(err)
		return
	}

	if !exists {
		err = s.Minio.MakeBucket(bucketName, location)
		if err != nil {
			glog.Error(err)
			return
		}

		glog.Infof("Successfully created bucket [%s]", bucketName)
	}

	// 使用FPutObject上传一个zip文件。
	n, err := s.Minio.FPutObject(bucketName, objName, fp, minio.PutObjectOptions{ContentType: contentType})
	if err != nil {
		glog.Error(err)
		return
	}

	glog.Infof("Successfully uploaded %s of size %d", objName, n)

	return
}
