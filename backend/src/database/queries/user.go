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

	err := q.Select(&records, GetUsersQuery)

	if err != nil {
		return records, err
	}

	return records, nil
}

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
	_, err := q.Exec(UpsertUserQuery, u.Login, time.Now(), u.Role.String(), u.Status.String(), &data)
	return err
}

func (q *UserQueries) GetByLogin(login string) (*models.UserRecord, error) {
	record := &models.UserRecord{}

	err := q.Get(record, GetUserQuery, login)
	return record, err
}

func (q *UserQueries) UpdateStatus(login string, status ext.UserStatus, rejectReason string) error {
	_, err := q.Exec(UpdateUserStatusQuery, login, rejectReason, status.String())
	return err
}

func (q *UserQueries) GetMailingList() ([]*models.UserRecord, error) {
	var users []*models.UserRecord
	err := q.Select(&users, GetUsersToMailQuery)
	return users, err
}
