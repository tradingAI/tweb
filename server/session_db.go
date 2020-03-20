package server

import (
	"github.com/golang/glog"
	"github.com/tradingAI/go/utils/werkzeug"
	m "github.com/tradingAI/tweb/server/model"
)

func (s *Server) CreateUser(username string, password string, role m.UserRole) (err error) {
	user := &m.User{
		Username:     username,
		Role:         role,
		PasswordHash: werkzeug.GeneratePasswordHash(password),
	}

	if err = s.DB.Create(user).Error; err != nil {
		glog.Error(err)
		return
	}

	return
}
