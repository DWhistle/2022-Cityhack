package controllers

import (
	"github.com/Dwhistle/2022-CityHack/backend/src/database"
	"github.com/Dwhistle/2022-CityHack/backend/src/models/ext"
	"github.com/gofiber/fiber/v2"
	"google.golang.org/protobuf/encoding/protojson"
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

func AddUser(c *fiber.Ctx) error {
	var u ext.User

	err := protojson.Unmarshal(c.Body(), &u)
	if err != nil {
		return c.Status(400).SendString(err.Error())
	}
	conn, _ := database.OpenConnection()
	err = conn.UserQueries.Upsert(&u)

	if err != nil {
		return c.Status(500).SendString(err.Error())
	} else {
		return c.SendStatus(200)
	}
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
