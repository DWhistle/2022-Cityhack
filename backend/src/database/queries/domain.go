package queries

import (
	"fmt"

	"github.com/Dwhistle/2022-CityHack/backend/src/models"
	"github.com/jmoiron/sqlx"
	"google.golang.org/protobuf/encoding/protojson"
)

type DomainQueries struct {
	*sqlx.DB
}

func (q *DomainQueries) GetEnterprises() ([]models.EnterpriseRecord, error) {
	records := []models.EnterpriseRecord{}

	query := `SELECT * from enterprises`
	err := q.Select(&records, query)

	fmt.Println(err)
	if err != nil {
		return records, err
	}

	return records, nil
}

func (q *DomainQueries) CreateEnterpriseRecord(rec *models.EnterpriseRecord) error {
	query := `INSERT INTO enterprises values($1, $2, $3, $4, $5)`
	data, _ := protojson.Marshal(&rec.Data)
	_, err := q.Exec(query, rec.ID, rec.CreatedAt, rec.CreatorId, rec.Status, data)

	if err != nil {
		// Return only error.
		return err
	}

	// This query returns nothing.
	return nil
}

// type DomainRecord struct {
// 	ID uint64
// 	CreatedAt time.Time
// 	CreatorId uint64
// 	Status RecordStatus
// 	Data DomainData
// }
