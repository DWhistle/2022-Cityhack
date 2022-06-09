package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"
)

type RecordStatus string

const (
	NEW      RecordStatus = "NEW"
	MAILED   RecordStatus = "MAILED"
	UPDATING RecordStatus = "UPDATING"
	DELETED  RecordStatus = "DELETED"
)

type EnterpriseRecord struct {
	ID        uint64       `db:"id"`
	CreatedAt time.Time    `db:"created_at"`
	CreatorId uint64       `db:"creator_id"`
	Status    RecordStatus `db:"status"`
	Data      EnterpriseData   `db:"data"`
}

func (dd *EnterpriseData) Value() (driver.Value, error) {
	return json.Marshal(&dd)
}

func (b *EnterpriseData) Scan(value interface{}) error {
	j, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}

	return json.Unmarshal(j, &b)
}
