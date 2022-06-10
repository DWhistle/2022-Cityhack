package queries

import (
	"errors"
	"time"

	"github.com/Dwhistle/2022-CityHack/backend/src/models"
	"github.com/Dwhistle/2022-CityHack/backend/src/models/ext"
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

const upsertUserQuery = `INSERT INTO public.users(login, created_at, role, data)
VALUES ($1, $2, $3, $4)
ON CONFLICT (login) 
DO 
UPDATE SET  data = $4,
			role = $3;
`

func (q *UserQueries) Upsert(u *ext.User) error {
	data := models.UserData{
		Url:         u.Url,
		Email:       u.Email,
		Phone:       u.Phone,
		Inn:         u.Inn,
		Description: u.Description,
		Logo:        u.Logo,
	}
	if len(u.Login) == 0 {
		return errors.New("login cannot be empty")
	}
	q.Exec(upsertUserQuery, u.Login, time.Now(), u.Role.String(), &data)
	return nil
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
