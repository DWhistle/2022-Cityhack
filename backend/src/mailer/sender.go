package mailer

import (
	"log"

	"gopkg.in/gomail.v2"
)

type Email struct {
	From    string
	To      string
	Subject string
	Body    string
	Attach  string
}

func SendEmail(email Email) error {
	dialer := gomail.NewDialer("smtp.yandex.com", 465, "mostorg22@yandex.com", "123456A.2")
	m := gomail.NewMessage()
	m.SetHeader("From", email.From)
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

func Listen(mails chan Email) {

	for m := range mails {
		log.Print("Sending message to " + m.To)
		SendEmail(m)
		close(mails)
	}

}
