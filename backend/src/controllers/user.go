package controllers

import (
	"github.com/Dwhistle/2022-CityHack/backend/src/database"
	"github.com/gofiber/fiber/v2"
)

// import "github.com/Dwhistle/2022-CityHack/backend/src/models"
func Login(c *fiber.Ctx) error {
	if form, err := c.MultipartForm(); err == nil {
		return c.JSON(fiber.Map{
			"login": form.Value["login"],
		})
	}
	return c.Status(400).SendString("Login not given")
}

func GetUserByLogin(c *fiber.Ctx) error {
	login := c.Get("Authorization")
	if len(login) == 0 {
		return c.SendStatus(400)
	}
	conn, _ := database.OpenConnection()

	user, err := conn.UserQueries.GetByLogin(login)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(user)
}
