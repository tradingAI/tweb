package server

import (
	"io"

	"net/http"
	"os"
	"path/filepath"

	"github.com/golang/glog"
	"github.com/gorilla/mux"
	io2 "github.com/tradingAI/go/utils/io"
	"github.com/tradingAI/go/utils/web"
)

func (s *Server) handleModel(router *mux.Router) {
	router.HandleFunc("/models/", s.fetchModels).Methods("GET")
	router.HandleFunc("/models/upload/", s.uploadModel).Methods("POST")
}

func (s *Server) fetchModels(w http.ResponseWriter, r *http.Request) {
	web.OK(w)
}

func (s *Server) uploadModel(w http.ResponseWriter, r *http.Request) {
	file, fileHeader, err := r.FormFile("file")
	if err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	defer file.Close()
	glog.Infof("filename: %v", fileHeader.Filename)

	// TODO(mickey): use MD5
	newFilePath := filepath.Join(s.Conf.StorageDir, "models", fileHeader.Filename)

	// Create storage dir
	if err = io2.CreateDirIfNotExist(filepath.Dir(newFilePath)); err != nil {
		glog.Error(err)
		return
	}

	newFile, err := os.Create(newFilePath)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}
	defer newFile.Close()

	_, err = io.Copy(newFile, file)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	err = s.MinioUpload(newFilePath, fileHeader.Filename, "application/gzip")
	if err != nil {
		glog.Error(err)
		return
	}

	web.OK(w)
}
