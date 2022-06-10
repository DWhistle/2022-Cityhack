package queries

import (
	"github.com/Dwhistle/2022-CityHack/backend/src/models"
	"github.com/jmoiron/sqlx"
)

type UserQueries struct {
	*sqlx.DB
}

func (q *UserQueries) GetUsers() ([]models.UserRecord, error) {
	records := []models.UserRecord{}

	query := `SELECT * from users`
	err := q.Select(&records, query)

	if err != nil {
		return records, err
	}

	return records, nil
}

func (q *UserQueries) GetByLogin(login string) (*models.UserRecord, error) {
	record := &models.UserRecord{}

	query := `SELECT * FROM users WHERE login = $1 LIMIT 1`
	err := q.Get(record, query, login)

	if err != nil {
		return record, err
	} else {
		return record, nil
	}
}
