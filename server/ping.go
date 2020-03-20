package server

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func (s *Server) handlePing(router *mux.Router) {
	router.HandleFunc("/ping", s.ping).Methods("GET")
}

func (s *Server) ping(w http.ResponseWriter, r *http.Request) {
	fmt.Println(s)
	w.WriteHeader(http.StatusOK)
}
