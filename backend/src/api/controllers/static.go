package controllers

import (
	"github.com/Dwhistle/2022-CityHack/backend/src/database"
	"github.com/gofiber/fiber/v2"
)

func GetOdkp2(c *fiber.Ctx) error {
	conn, err := database.OpenConnection()
	if err != nil {
		return Error(c, err)
	}
	recs, err := conn.ProductQueries.GetOkpd2()
	if err != nil {
		return Error(c, err)
	}
	return c.JSON(recs)
}
