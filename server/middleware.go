package server

import (
	"context"
	"net/http"

	"github.com/jinzhu/gorm"

	"github.com/golang/glog"
	"github.com/tradingAI/go/utils/web"
	"github.com/tradingAI/tweb/proto"
	m "github.com/tradingAI/tweb/server/model"
)

func (s *Server) logMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		glog.Infof("%s %s", r.Method, r.RequestURI)
		next.ServeHTTP(w, r)
	})
}

type ctxKey string

const (
	ctxSession ctxKey = "session"
)

func (s *Server) authMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token := r.Header.Get("Access-Token")

		if token == "" {
			glog.Infof("Access-Token not found")
			web.Unauthorized(w)
			return
		}

		// fetch session
		var sess m.Session
		err := s.DB.Where("token = ?", token).First(&sess).Error
		if err != nil {
			if err == gorm.ErrRecordNotFound {
				glog.Infof("session not found")
				web.Unauthorized(w)
			}
			glog.Error(err)
			web.InternalError(w, err)
			return
		}

		// fetch user
		var user m.User
		err = s.DB.Where("username = ?", sess.Username).First(&user).Error

		if err != nil {
			glog.Error(err)
			if err == gorm.ErrRecordNotFound {
				glog.Infof("user not found")
				web.Unauthorized(w)
				return
			}

			web.InternalError(w, err)
			return
		}

		// rember session in the context
		ctx := context.WithValue(r.Context(), ctxSession, *makeSession(user, token))
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func makeSession(user m.User, token string) *proto.Session {
	return &proto.Session{
		Token: token,
		User: &proto.User{
			Role:     m.UserRoleLUT[user.Role],
			Nickname: user.Username,
		},
	}
}
