#!/bin/sh

set -e

go mod init && go mod tidy
make build_linux
./main/server -c=conf-docker.yaml