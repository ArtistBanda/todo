package main

import (
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

const ServeAddress = "0.0.0.0:8000"

func main() {
	router := chi.NewRouter()

	router.Use(middleware.Timeout(60 * time.Second))
	router.Use(middleware.RequestID)
	router.Use(middleware.RealIP)
	router.Use(middleware.Logger)
	router.Use(middleware.Recoverer)

	server := newServer(ServeAddress, router)

	log.Println("Starting server on " + ServeAddress)
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err, "Failed to start the server")
	}
}

func newServer(addr string, r *chi.Mux) *http.Server {
	return &http.Server{
		Addr:    addr,
		Handler: r,
	}
}
