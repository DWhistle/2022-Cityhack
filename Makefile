.PHONY: clean test security build run

APP_NAME = import_replacement
BACKEND_DIR = $(PWD)/backend
MIGRATIONS_FOLDER = $(BACKEND_DIR)/platform/migrations

# clean:
# 	rm -rf ./build

# security:
# 	gosec -quiet ./...

# test: security
# 	go test -v -timeout 30s -coverprofile=cover.out -cover ./...
# 	go tool cover -func=cover.out

# build: clean test
# 	CGO_ENABLED=0 go build -ldflags="-w -s" -o $(BUILD_DIR)/$(APP_NAME) main.go

# run: swag build
# 	$(BUILD_DIR)/$(APP_NAME)

migrate.up:
	migrate -path $(MIGRATIONS_FOLDER) -database "$(DATABASE_URL)" up

migrate.down:
	migrate -path $(MIGRATIONS_FOLDER) -database "$(DATABASE_URL)" down

migrate.force:
	migrate -path $(MIGRATIONS_FOLDER) -database "$(DATABASE_URL)" force $(version)

proto.backend:
	protoc --go_out=$(BACKEND_DIR)/src/ proto/*

proto.frontend:
	protoc --js_out=. proto/*

docker.backend: proto.backend
	docker-compose up $(flgs) app nginx db

docker.all: docker.backend

docker.recreate: proto.backend
	make docker.backend flgs="--force-recreate --build"

swag:
	swag init