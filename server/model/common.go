package model

import (
	"time"

	"github.com/jinzhu/gorm"
	proto "github.com/tradingAI/proto/gen/go/tweb"
)

type Session struct {
	gorm.Model
	Token     string    `gorm:"column:token; not null" json:"token"`
	ExpiredAt time.Time `gorm:"column:expired_at; not null" json:"expired_at"`
	UserID    int       `gorm:"column:user_id; not null" json:"user_id"`
}

func (Session) TableName() string {
	return "sessions"
}

type UserRole string

const (
	RoleAdmin UserRole = "administrator"
	RoleUser  UserRole = "user"
)

var UserRoleLUT = map[UserRole]proto.UserRole{
	RoleAdmin: proto.UserRole_ROLE_ADMIN,
	RoleUser:  proto.UserRole_ROLE_USER,
}

type User struct {
	gorm.Model
	Username     string   `gorm:"column:username; not null"`
	Role         UserRole `gorm:"column:role; not null"`
	PasswordHash string   `gorm:"column:password; not null"`
}

func (User) TableName() string {
	return "users"
}
