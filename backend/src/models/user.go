package models

import "time"

type UserStatus string

type Role string

const (
	ADMIN      Role = "ADMIN"
	ENTERPRISE Role = "ENTERPRISE"
	VIEWER     Role = "VIEWER"
)

type UserRecord struct {
	ID        string    `db:"id"`
	CreatedAt time.Time `db:"created_at"`
	Role      Role      `db:"role"`
	Data      UserData  `db:"data"`
}
