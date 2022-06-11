package routes

import (
	"github.com/Dwhistle/2022-CityHack/backend/src/controllers"
	"github.com/gofiber/fiber/v2"
)

// PublicRoutes func for describe group of public routes.
func PublicRoutes(a *fiber.App) {
	// Create routes group.
	route := a.Group("/api/v1")

	// Routes for GET method:
	route.Get("/enterprises", controllers.GetEnterprises)
	route.Post("/login", controllers.Login)
	route.Get("/user", controllers.GetUserByLogin)
	route.Post("/products", controllers.CreateProductsBatch)
	route.Get("/products", controllers.GetUserProducts)
	route.Post("/user", controllers.AddUser)
	route.Get("/any", func(c *fiber.Ctx) error {
		return c.SendString("123")
	})
}
