package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"
)

type UserStatus string

type Role string

const (
	ADMIN      Role = "ADMIN"
	ENTERPRISE Role = "ENTERPRISE"
	VIEWER     Role = "VIEWER"
)

type UserRecord struct {
	ID        int64     `db:"id" json:"name"`
	Login     string    `db:"login" json:"login"`
	CreatedAt time.Time `db:"created_at" json:"created_at"`
	Role      Role      `db:"role" json:"role"`
	Data      UserData  `db:"data" json:"data"`
}

func (dd *UserData) Value() (driver.Value, error) {
	return json.Marshal(&dd)
}

func (b *UserData) Scan(value interface{}) error {
	j, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}

	return json.Unmarshal(j, &b)
}
