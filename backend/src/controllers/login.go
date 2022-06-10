package controllers

import "github.com/gofiber/fiber/v2"

// import	"github.com/Dwhistle/2022-CityHack/backend/src/database"
// import "github.com/Dwhistle/2022-CityHack/backend/src/models"
func Login(c *fiber.Ctx) error {
	if form, err := c.MultipartForm(); err == nil {
		return c.JSON(fiber.Map{
			"login": form.Value["login"],
		})
	}
	return c.Status(400).SendString("Login not given")
}
