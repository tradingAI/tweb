package server

import (
	"fmt"
	"io"
	"io/ioutil"
	"os"
	"path/filepath"
	"sort"
	"strconv"

	"net/http"

	"github.com/golang/glog"
	"github.com/gorilla/mux"
	io2 "github.com/tradingAI/go/utils/io"
	"github.com/tradingAI/go/utils/web"
	"github.com/tradingAI/tweb/proto"
	m "github.com/tradingAI/tweb/server/model"
)

func (s *Server) handleModel(router *mux.Router) {
	router.HandleFunc("/models/", s.fetchModels).Methods("GET")
	router.HandleFunc("/models/{id:[0-9]+}/", s.deleteModel).Methods("DELETE")
	router.HandleFunc("/models/upload/", s.uploadModelInit).Methods("POST")
	router.HandleFunc("/models/upload/{id:[0-9]+}/chunk/", s.uploadModelChunk).Methods("POST")
	router.HandleFunc("/models/upload/{id:[0-9]+}/completed/", s.uploadModelCompleted).Methods("POST")
}

func (s *Server) fetchModels(w http.ResponseWriter, r *http.Request) {
	var models []m.Model

	if err := s.DB.Find(&models).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	var resp proto.FetchModelResponse

	var modelsProto []*proto.Model

	for _, model := range models {
		mp := proto.Model{
			Id:          int64(model.ID),
			Name:        model.Name,
			Version:     model.Version,
			Description: model.Description,
		}

		var user m.User
		if err := s.DB.Where("id = ?", model.UserID).Find(&user).Error; err != nil {
			glog.Error(err)
			web.InternalError(w, err)
			return
		}

		mp.User = &proto.User{
			Id:       int64(user.ID),
			Role:     m.UserRoleLUT[user.Role],
			Nickname: user.Username,
		}

		modelsProto = append(modelsProto, &mp)
	}

	resp.Models = modelsProto

	web.RespondJSON(w, &resp)
}

func (s *Server) deleteModel(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := vars["id"]

	var model m.Model
	if err := s.DB.Where("id = ?", id).Find(&model).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	if err := s.DB.Delete(&model).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	return
}

func (s *Server) uploadModelInit(w http.ResponseWriter, r *http.Request) {
	var req proto.CreateModelRequest

	if err := web.ReadJSONBody(r.Body, &req); err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	sess, err := s.GetSession(r)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	modelID, err := s.CreateModel(req.Name,
		req.Version,
		req.Description,
		req.FileType,
		sess.UserID)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	var resp proto.CreateModelResponse
	resp.Id = strconv.Itoa(modelID)

	web.RespondJSON(w, &resp)
}

func (s *Server) uploadModelChunk(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := vars["id"]

	file, _, err := r.FormFile("chunk")
	if err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	defer file.Close()

	chunkHash := r.FormValue("hash")
	index := r.FormValue("index")

	chunkData, err := ioutil.ReadAll(file)
	if err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	glog.Infof("received chunk with size %v, hash %v, for upload %v",
		len(chunkData), chunkHash, id)

	// save
	chunkFileName := fmt.Sprintf("%s_%s", chunkHash, index)
	savePath := s.chunkSavePath(chunkFileName)

	if err = io2.CreateDirIfNotExist(filepath.Dir(savePath)); err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	if err = ioutil.WriteFile(savePath, chunkData, 0666); err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	web.OK(w)
}

func (s *Server) uploadModelCompleted(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := vars["id"]

	var req proto.UploadModelCompleteRequest

	if err := web.ReadJSONBody(r.Body, &req); err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	chunkList := req.Chunks
	var sortChunks SortChunks

	for _, meta := range chunkList {
		sortChunks = append(sortChunks, meta)
	}

	sort.Sort(sortChunks)

	// check chunk existed
	for _, meta := range sortChunks {
		chunkFileName := fmt.Sprintf("%s_%s", meta.Md5, meta.Index)
		savePath := s.chunkSavePath(chunkFileName)
		if !io2.DoesFileExist(savePath) {
			err := fmt.Errorf("file [%s] is not existed", savePath)
			glog.Error(err)
			web.BadRequest(w, err)
			return
		}
	}

	// concatecate chunks
	if err := s.concatChunks(id, sortChunks); err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	var model m.Model
	if err := s.DB.Where("id = ?", id).Find(&model).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	// upload to minio
	modelSavePath := s.modelSavePath(id)
	modelFileName := filepath.Base(modelSavePath)
	err := s.MinioUpload(modelSavePath, modelFileName, model.FileType)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	model.MinioPath = modelFileName
	err = s.DB.Save(&model).Error
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	// clear
	for _, meta := range sortChunks {
		chunkFileName := fmt.Sprintf("%s_%s", meta.Md5, meta.Index)
		chunkSavePath := s.chunkSavePath(chunkFileName)
		if e := os.Remove(chunkSavePath); e != nil {
			glog.Warning(e)
		}
	}

	web.OK(w)
}

type SortChunks []*proto.ChunkMeta

func (s SortChunks) Len() int           { return len(s) }
func (s SortChunks) Swap(i, j int)      { s[i], s[j] = s[j], s[i] }
func (s SortChunks) Less(i, j int) bool { return s[i].Index < s[j].Index }

func (s *Server) concatChunks(id string, sortedChunks SortChunks) (err error) {
	modelPath := s.modelSavePath(id)
	modelFile, err := os.OpenFile(modelPath, os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		glog.Error(err)
		return
	}
	defer modelFile.Close()

	for _, chunkMeta := range sortedChunks {
		chunkSavePath := s.chunkSavePath(fmt.Sprintf("%s_%s", chunkMeta.Md5, chunkMeta.Index))
		if err = copyChunk(chunkSavePath, modelFile); err != nil {
			glog.Error(err)
			return
		}
	}

	return
}

func copyChunk(chunkPath string, modelFile io.Writer) (err error) {
	chunk, err := os.Open(chunkPath)
	if err != nil {
		glog.Error(err)
		return
	}
	defer chunk.Close()

	_, err = io.Copy(modelFile, chunk)
	if err != nil {
		glog.Error(err)
		return
	}

	return
}
