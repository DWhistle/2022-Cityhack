package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"
)

type ProductStatus string

type Okpd2 struct {
	Number string `db:"number" json:"number"`
	Name   string `db:"name" json:"name"`
	Id     int32  `db:"id" json:"id"`
}

type ProductRecord struct {
	ID        int64         `db:"id" json:"id"`
	CreatedAt time.Time     `db:"created_at" json:"created_at"`
	CreatorId int32         `db:"creator_id" json:"creator_id"`
	Status    ProductStatus `db:"status" json:"status"`
	Data      ProductData   `db:"data" json:"data"`
}

func (dd *ProductData) Value() (driver.Value, error) {
	return json.Marshal(&dd)
}

func (b *ProductData) Scan(value interface{}) error {
	j, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}

	return json.Unmarshal(j, &b)
}
