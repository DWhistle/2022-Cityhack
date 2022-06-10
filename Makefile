.PHONY: build run

APP_NAME = import_replacement
BACKEND_DIR = $(PWD)/backend
MIGRATIONS_FOLDER = $(BACKEND_DIR)/platform/migrations


#### database
migrate.up:
	migrate -path $(MIGRATIONS_FOLDER) -database "$(DATABASE_URL)" up

migrate.down:
	migrate -path $(MIGRATIONS_FOLDER) -database "$(DATABASE_URL)" down

migrate.force:
	migrate -path $(MIGRATIONS_FOLDER) -database "$(DATABASE_URL)" force $(version)
####

#### backend
backend.verify: proto.backend
	@cd $(BACKEND_DIR)/src && go fmt && go mod download && go build -o /dev/null && echo "All correct"

swag:
	swag init

proto.backend:
	@protoc --go_out=$(BACKEND_DIR)/src/ proto/*
#####

proto.frontend:
	protoc --js_out=. proto/*

#### docker
docker.backend: proto.backend backend.verify
	docker-compose up $(flgs) app nginx db

docker.all: docker.backend

docker.recreate: proto.backend
	docker-compose rm -f db
	make docker.backend flgs="--force-recreate --build"
####