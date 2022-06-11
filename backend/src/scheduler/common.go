package scheduler

import (
	"sync"

	"github.com/Dwhistle/2022-CityHack/backend/src/mailer"
)

var wg sync.WaitGroup

func mailingTask() {
	defer wg.Done()
	emails := make(chan *mailer.Email)
	go mailer.Listen(emails)
	SendMailsTask(emails)
}
func Start() {
	wg.Add(1)
	go mailingTask()
	wg.Wait()
}
