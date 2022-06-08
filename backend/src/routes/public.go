package routes

import (
	"github.com/Dwhistle/2022-CityHack/src/controllers"
	"github.com/gofiber/fiber/v2"
)

// PublicRoutes func for describe group of public routes.
func PublicRoutes(a *fiber.App) {
	// Create routes group.
	route := a.Group("/api/v1")

	// Routes for GET method:
	route.Get("/domains", controllers.GetDomains)
	route.Get("/any", func(c *fiber.Ctx) error {
		return c.SendString("123")
	})
}
