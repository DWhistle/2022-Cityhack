package scheduler

import (
	"log"
	"time"

	"github.com/Dwhistle/2022-CityHack/backend/src/database"
	"github.com/Dwhistle/2022-CityHack/backend/src/mailer"
)

type Task interface {
	Start()
}

func SendMailsTask(emails chan *mailer.Email) {
	for {
		conn, err := database.OpenConnection()
		if err != nil {
			log.Fatal(err)
		}
		users, err := conn.UserQueries.GetMailingList()
		if err != nil {
			log.Fatal(err)
		}
		for _, user := range users {
			emails <- &mailer.Email{
				To:      user.Data.Email,
				Subject: "",
				Body:    "",
				Attach:  "",
				User:    user,
			}
		}
		time.Sleep(time.Second * 30)
	}
}
