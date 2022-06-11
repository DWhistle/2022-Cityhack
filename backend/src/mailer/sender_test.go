package mailer

import (
	"testing"
	"time"
)

func TestSimpleEmail(t *testing.T) {
	msg := Email{
		To:      "mostorg22@yandex.com",
		Subject: "Купите наши гвозди",
		Body:    "<html>1232323</html>",
		// Attach:  "123",
	}
	ch := make(chan *Email)
	go Listen(ch)

	ch <- &msg
	time.Sleep(time.Second * 10)
}
