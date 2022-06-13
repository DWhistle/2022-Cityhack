package main

import (
	"log"
	"os"
	"path/filepath"
	"sync"

	"github.com/Dwhistle/2022-CityHack/backend/src/api"
	"github.com/Dwhistle/2022-CityHack/backend/src/api/routes"
	"github.com/Dwhistle/2022-CityHack/backend/src/scheduler"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

var wg sync.WaitGroup

func startApi() {
	defer wg.Done()
	app := fiber.New()

	api.DefaultSetup(app)
	routes.PublicRoutes(app)

	app.Listen(":5000")
	log.Println("Exiting api")
}

func startScheduler() {
	defer wg.Done()
	scheduler.Start()
	log.Println("Exiting scheduler")
}

func main() {
	dir, _ := filepath.Abs(filepath.Dir(os.Args[0]))
	godotenv.Load(filepath.Join(dir, ".env"))
	wg.Add(2)
	go startApi()
	go startScheduler()
	wg.Wait()
}
