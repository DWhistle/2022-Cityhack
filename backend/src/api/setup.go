package api

import (
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cache"
)

func DefaultSetup(a *fiber.App) {
	a.Use(cache.New(cache.Config{
		Next: func(c *fiber.Ctx) bool {
			return strings.Contains(c.Path(), "okpd2")
		},
		Expiration:   30 * time.Minute,
		CacheControl: true,
	}))
	return
}
