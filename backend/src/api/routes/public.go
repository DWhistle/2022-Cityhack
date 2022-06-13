package routes

import (
	"github.com/Dwhistle/2022-CityHack/backend/src/api/controllers"
	"github.com/gofiber/fiber/v2"
)

// PublicRoutes func for describe group of public routes.
func PublicRoutes(a *fiber.App) {
	// Create routes group.
	route := a.Group("/api/v1")

	users := route.Group("/user")
	users.Get("/", controllers.GetUserByLogin)
	users.Post("/", controllers.AddUser)
	users.Post("/status", controllers.ChangeUserStatus)
	users.Get("/all", controllers.GetUsers)

	route.Post("/login", controllers.Login)

	products := route.Group("/products")
	products.Post("/", controllers.CreateProductsBatch)
	products.Get("/", controllers.GetUserProducts)
	products.Get("/all", controllers.GetAllProducts)

	route.Get("/okpd2", controllers.GetOdkp2)
	route.Get("/ping", func(c *fiber.Ctx) error {
		return c.SendString("pong")
	})
}
