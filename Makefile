.PHONY: proto build_linux build_darwin clean

CONF=$(shell pwd)/conf.yaml

up:
	docker-compose -f docker-compose.yml up -d grandet_db minio

down:
	docker-compose -f docker-compose.yml down

proto:
	bash proto.sh

frontend_install:
	cd frontend && make install

run:
	go run main/main.go -c=conf.yaml

run_docker:
	docker-compose -f docker-compose.yml up -d

run_docker_prod:
	docker-compose -f docker-compose-prod.yml up -d

build_linux: frontend_install proto
	cd frontend && make build_project
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 packr2 build -o server main/main.go

build_darwin: frontend_install proto
	cd frontend && make build_project
	GOOS=darwin GOARCH=amd64 CGO_ENABLED=0 packr2 build -o server main/main.go

clean:
	cd main && packr2 clean

build_image:
	docker build -f dev.Dockerfile --no-cache -t mickeyzhoudocker/tweb:latest .

build_prod_image:
	docker build -f Dockerfile --no-cache -t mickeyzhoudocker/tweb_prod:latest .

build_base_image:
	docker build -f base.Dockerfile -t mickeyzhoudocker/devel:latest .
