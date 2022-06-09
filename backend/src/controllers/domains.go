package controllers

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/Dwhistle/2022-CityHack/backend/src/database"
	"github.com/Dwhistle/2022-CityHack/backend/src/models"
	"github.com/gofiber/fiber/v2"
)

func GetEnterprises(c *fiber.Ctx) error {
	db, err := database.OpenConnection()
	if err != nil {
		// Return status 500 and database connection error.
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": true,
			"msg":   err.Error(),
		})
	}
	db.CreateEnterpriseRecord(&models.EnterpriseRecord{
		ID:        uint64(rand.Int()),
		CreatedAt: time.Now(),
		CreatorId: uint64(rand.Int()),
		Status:    models.NEW,
		Data: models.EnterpriseData{
			Url:   "http:123",
			Email: "http:123",
			Phone: "+8213232332",
		},
	})
	enterprises, e := db.GetEnterprises()
	fmt.Print(e)
	return c.JSON(fiber.Map{
		"error": false,
		"msg":   nil,
		"count": len(enterprises),
		"books": enterprises,
	})
}
