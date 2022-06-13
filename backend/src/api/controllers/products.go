package controllers

import (
	"github.com/Dwhistle/2022-CityHack/backend/src/database"
	"github.com/Dwhistle/2022-CityHack/backend/src/models/ext"
	"github.com/gofiber/fiber/v2"
	"google.golang.org/protobuf/encoding/protojson"
)

func GetAllProducts(c *fiber.Ctx) error {
	conn, err := database.OpenConnection()
	if err != nil {
		return Error(c, err)
	}
	prods, err := conn.ProductQueries.GetAllProducts()

	if err != nil {
		Error(c, err)
	}

	return c.JSON(fiber.Map{
		"products": prods,
	})
}

func GetUserProducts(c *fiber.Ctx) error {
	login := c.Get("Authorization")
	if len(login) == 0 {
		return c.SendStatus(400)
	}
	conn, err := database.OpenConnection()
	if err != nil {
		return Error(c, err)
	}

	user, err := conn.UserQueries.GetByLogin(login)
	if err != nil {
		return c.SendStatus(404)
	}

	prods, err := conn.ProductQueries.GetUserProducts(int32(user.ID))

	if err != nil {
		Error(c, err)
	}
	return c.JSON(fiber.Map{
		"products": prods,
	})
}

func CreateProductsBatch(c *fiber.Ctx) error {
	db, err := database.OpenConnection()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": true,
			"msg":   err.Error(),
		})
	}
	var products ext.ProductRequest
	err = protojson.Unmarshal(c.Body(), &products)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": true,
			"msg":   err.Error(),
		})
	}
	err = db.InsertBatch(products.Creator, products.Products)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": true,
			"msg":   err.Error(),
		})
	}
	return nil
}
