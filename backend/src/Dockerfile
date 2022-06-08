FROM golang:1.18-alpine AS builder

WORKDIR /build
COPY go.mod go.sum ./
RUN go mod download

COPY . .
# ENV CGO_ENABLED=0 GOOS=linux GOARCH=64
ENV CGO_ENABLED=0
# RUN go build -ldflags="-s -w" -o apiserver .
RUN go build -o apiserver .
# FROM scratch

# Copy binary and config files from /build 
# to root folder of scratch container.
# COPY --from=builder ["/build/apiserver", "/build/.env", "/"]

# Export necessary port.
EXPOSE 5000

# Command to run when starting the container.
ENTRYPOINT ["./apiserver"]
