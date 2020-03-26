package server

import (
	"fmt"
	"net/http"
	"time"

	"github.com/jinzhu/gorm"

	"github.com/golang/glog"
	"github.com/gorilla/mux"
	"github.com/tradingAI/go/utils/random"
	"github.com/tradingAI/go/utils/web"
	"github.com/tradingAI/go/utils/werkzeug"
	"github.com/tradingAI/tweb/common"
	"github.com/tradingAI/tweb/proto"
	m "github.com/tradingAI/tweb/server/model"
)

func (s *Server) handleSessionPublic(router *mux.Router) {
	router.HandleFunc(`/sessions/login/`, s.Login).Methods("POST")
}

func (s *Server) handleSession(router *mux.Router) {
	router.HandleFunc(`/sessions/logout/`, s.Logout).Methods("POST")
}

func (s *Server) Login(w http.ResponseWriter, r *http.Request) {
	var req proto.LoginRequest
	err := web.ReadJSONBody(r.Body, &req)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	if req.Username == "" {
		err = fmt.Errorf("missing username")
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}
	if req.Password == "" {
		err = fmt.Errorf("missing password")
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	var user m.User
	err = s.DB.Where("username = ?", req.Username).Find(&user).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			resp := proto.LoginResponse{
				Error: proto.Error_INVALID_USERNAME_OR_PASSWORD,
			}
			web.RespondJSON(w, &resp)
			return
		}
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	// fetch the account matching the username, check password
	correctPassword := werkzeug.CheckPasswordHash(req.Password, user.PasswordHash)
	if !correctPassword {
		// password incorrect
		resp := proto.LoginResponse{
			Error: proto.Error_INVALID_USERNAME_OR_PASSWORD,
		}
		web.RespondJSON(w, &resp)
		return
	}

	// insert a session
	sess := m.Session{
		Token:     random.StringWithCharset(8, random.CharsetAlphaNumeric),
		UserID:    int(user.ID),
		ExpiredAt: time.Now().Add(12 * time.Hour),
	}

	if err = s.DB.Create(&sess).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	// only return limited information about the user to frontend
	resp := proto.LoginResponse{
		Session: makeSession(user, sess.Token),
	}
	web.RespondJSON(w, &resp)
	return
}

func (s *Server) Logout(w http.ResponseWriter, r *http.Request) {
	sess, ok := r.Context().Value(ctxSession).(proto.Session)
	if !ok {
		web.Unauthorized(w)
		return
	}

	err := s.DB.Where("token = ?", sess.Token).Delete(&m.Session{}).Error
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	return
}

func (s *Server) GetSession(r *http.Request) (sess m.Session, err error) {
	token := r.Header.Get("Access-Token")

	if token == "" {
		err = common.ErrAccessTokenNotFound
		glog.Error(err)
		return
	}

	err = s.DB.Where("token = ?", token).First(&sess).Error
	if err != nil {
		glog.Error(err)
		return
	}

	return
}
