package server

import (
	"net"
	"net/http"

	"github.com/go-chi/chi/v5"
	log "github.com/sirupsen/logrus"
)

type Server struct {
	httpServer *http.Server
	router     *chi.Mux
}

func NewServer() *Server {
	router := chi.NewRouter()
	var server Server
	server.httpServer = &http.Server{Addr: "8000", Handler: router}
	server.router = router
	return &server
}

func (server *Server) ListenAndServe() error {
	listen, err := net.Listen("tcp", ":"+server.httpServer.Addr)
	if err != nil {
		log.Error("Not able to listen to the server")
	}
	log.Info("Server is listening on port " + server.httpServer.Addr)
	return server.httpServer.Serve(listen)
}
