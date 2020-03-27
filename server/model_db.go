package server

import (
	"github.com/golang/glog"
	proto "github.com/tradingAI/proto/gen/go/tweb"
	m "github.com/tradingAI/tweb/server/model"
)

func (s *Server) CreateModel(name, version, description, fileType string,
	userID int, status proto.ModelStatus) (modelID int, err error) {
	model := &m.Model{
		Name:        name,
		Version:     version,
		Description: description,
		FileType:    fileType,
		UserID:      userID,
		Status:      int(status),
	}

	if err = s.DB.Create(model).Error; err != nil {
		glog.Error(err)
		return
	}

	modelID = int(model.ID)

	return
}
