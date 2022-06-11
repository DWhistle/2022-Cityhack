package controllers

import (
	"math/rand"
	"time"

	"github.com/Dwhistle/2022-CityHack/backend/src/database"
	"github.com/Dwhistle/2022-CityHack/backend/src/models"
	"github.com/gofiber/fiber/v2"
)

func GetEnterprises(c *fiber.Ctx) error {
	db, err := database.OpenConnection()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": true,
			"msg":   err.Error(),
		})
	}
	db.CreateEnterpriseRecord(&models.EnterpriseRecord{
		ID:        uint64(rand.Int()),
		CreatedAt: time.Now(),
		CreatorId: uint64(rand.Int()),
		Status:    "models.EnterpriseStatus(models.ADMIN)",
		Data: models.EnterpriseData{
			Url:   "http:123",
			Email: "http:123",
			Phone: "+8213232332",
		},
	})
	enterprises, _ := db.GetEnterprises()
	return c.JSON(fiber.Map{
		"error": false,
		"msg":   nil,
		"count": len(enterprises),
		"books": enterprises,
	})
}
