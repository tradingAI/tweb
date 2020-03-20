# build image
FROM mickeyzhoudocker/devel:latest AS build

ENV PROJECT_PATH=/go/src/github.com/SnakeHacker/tweb
COPY frontend ${PROJECT_PATH}/frontend
COPY proto ${PROJECT_PATH}/proto
COPY main ${PROJECT_PATH}/main
COPY server ${PROJECT_PATH}/server
COPY common ${PROJECT_PATH}/common
COPY tushare ${PROJECT_PATH}/tushare
COPY Makefile ${PROJECT_PATH}/Makefile
COPY proto.sh ${PROJECT_PATH}/proto.sh

WORKDIR ${PROJECT_PATH}
RUN go mod init && go mod tidy
RUN make build_linux

# run-time image
FROM alpine

Label maintainer="zmjhacker@gmail.com"

ENV PROJECT_PATH=/go/src/github.com/SnakeHacker/tweb

COPY --from=build ${PROJECT_PATH}/main/server /

ENTRYPOINT ["/server", "-c", "/conf.yaml"]