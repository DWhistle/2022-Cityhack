package controllers

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/Dwhistle/2022-CityHack/src/database"
	"github.com/Dwhistle/2022-CityHack/src/models"
	"github.com/gofiber/fiber/v2"
)

func GetDomains(c *fiber.Ctx) error {
	db, err := database.OpenConnection()
	if err != nil {
		// Return status 500 and database connection error.
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": true,
			"msg":   err.Error(),
		})
	}
	db.CreateDomainRecord(&models.DomainRecord{
		ID:        uint64(rand.Int()),
		CreatedAt: time.Now(),
		CreatorId: uint64(rand.Int()),
		Status:    models.NEW,
		Data: models.DomainData{
			Url:   "http:123",
			Email: "http:123",
			Phone: "+8213232332",
		},
	})
	domains, e := db.GetDomains()
	fmt.Print(e)
	return c.JSON(fiber.Map{
		"error": false,
		"msg":   nil,
		"count": len(domains),
		"books": domains,
	})
}
