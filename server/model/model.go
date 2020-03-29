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
	UserID      uint64 `gorm:"column:user_id; not null" json:"user_id"`
	MinioPath   string `gorm:"column:minio_path; not null" json:"minio_path"`
	Status      int    `gorm:"column:status; not null" json:"status"`
}

func (Model) TableName() string {
	return "models"
}

var ModelFileTypeMap map[string]string = map[string]string{
	"application/x-tar": "tar",
	"application/zip":   "zip",
}
