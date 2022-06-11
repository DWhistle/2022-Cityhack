package mailer

import (
	"log"

	"github.com/Dwhistle/2022-CityHack/backend/src/database"
	"github.com/Dwhistle/2022-CityHack/backend/src/models"
	"github.com/Dwhistle/2022-CityHack/backend/src/models/ext"
	"gopkg.in/gomail.v2"
)

type Email struct {
	To      string
	Subject string
	Body    string
	Attach  string
	User    *models.UserRecord
}

func SendEmail(email *Email) error {
	sender := "mostorg22@yandex.com"
	dialer := gomail.NewDialer("smtp.yandex.com", 465, sender, "123456A.2")
	m := gomail.NewMessage()
	m.SetHeader("From", sender)
	m.SetHeader("To", email.To)
	// m.SetAddressHeader("Cc", "dan@example.com", "Dan")
	m.SetHeader("Subject", email.Subject)
	m.SetBody("text/html", email.Body)
	// m.Attach(email.Attach)
	if err := dialer.DialAndSend(m); err != nil {
		log.Fatal(err)
		return err
	}
	return nil
}

func Listen(mails chan *Email) {

	for m := range mails {
		log.Print("Sending message to " + m.To)
		SendEmail(m)
		conn, err := database.OpenConnection()
		if err != nil {
			log.Fatal(err)
		}
		err = conn.UserQueries.UpdateStatus(m.User.Login, ext.UserStatus_MAILED)
		if err != nil {
			log.Fatal(err)
		}
	}

}
