package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/Dwhistle/2022-CityHack/backend/src/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	dir, _ := filepath.Abs(filepath.Dir(os.Args[0]))
	err := godotenv.Load(filepath.Join(dir, ".env"))
	fmt.Println(err)
	app := fiber.New()

	routes.PublicRoutes(app)
	fmt.Print(app.Listen(":5000"))
	fmt.Print(123)
}
