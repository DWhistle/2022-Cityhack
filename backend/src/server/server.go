package server

import (
	fiberSwagger "github.com/swaggo/fiber-swagger"

	// _ "github.com/Dwhistle/2022-CityHack/docs"
	fiber "github.com/gofiber/fiber/v2"
)

// ListAccounts godoc
// @Summary      List accounts
// @Description  get accounts
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        q    query     string  false  "name search by q"  Format(email)
// @Router       /accounts [get]
func Start() {
	server := fiber.New()

	server.Get("/swagger/*", fiberSwagger.WrapHandler)
	server.Get("/any", func(c *fiber.Ctx) error {
		return c.SendString("123")
	})
	server.Listen(":3000")
}
