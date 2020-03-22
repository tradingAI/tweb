package server

import (
	"fmt"
	"path/filepath"
)

func (s *Server) tmpDir() string {
	return filepath.Join(s.Conf.StorageDir, "tmp")
}

func (s *Server) chunkSavePath(hash string) string {
	saveName := fmt.Sprintf("chunk.%s", hash)
	return filepath.Join(s.tmpDir(), saveName)
}

func (s *Server) modelSavePath(id string) string {
	saveName := fmt.Sprintf("model.%s", id)
	return filepath.Join(s.tmpDir(), saveName)
}
