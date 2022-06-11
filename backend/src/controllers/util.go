package controllers

import (
	"github.com/gofiber/fiber/v2"
)

func Error(c *fiber.Ctx, err error) error {
	return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
		"error": true,
		"msg":   err.Error(),
	})
}
