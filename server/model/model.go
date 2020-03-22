package model

import (
	"github.com/jinzhu/gorm"
)

type Model struct {
	gorm.Model
	Name        string `gorm:"column:name; not null" json:"name"`
	Version     string `gorm:"column:version; not null" json:"version"`
	Description string `gorm:"column:description; not null" json:"description"`
	FileType    string `gorm:"column:file_type; not null" json:"file_type"`
	UserID      int    `gorm:"column:user_id; not null" json:"user_id"`
	MinioPath   string `gorm:"column:minio_path; not null" json:"minio_path"`
}

func (Model) TableName() string {
	return "models"
}
