package main

import (
	"todo/server"

	log "github.com/sirupsen/logrus"
)

func main() {
	newServer := server.NewServer()
	log.Info("Starting")
	err := newServer.ListenAndServe()
	if err != nil {
		log.Fatalf("Failed to start newServer: %v", err)
	}
	log.Info("Server started")
}
