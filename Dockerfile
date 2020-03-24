# build image
FROM tradingai/bazel:latest AS build

ENV ROOT=/go/src/github.com/tradingAI
ENV PROJECT_PATH=${ROOT}/tweb

COPY frontend ${PROJECT_PATH}/frontend
COPY proto ${PROJECT_PATH}/proto
COPY main ${PROJECT_PATH}/main
COPY server ${PROJECT_PATH}/server
COPY common ${PROJECT_PATH}/common
COPY tushare ${PROJECT_PATH}/tushare
COPY Makefile ${PROJECT_PATH}/Makefile
COPY proto.sh ${PROJECT_PATH}/proto.sh

WORKDIR ${ROOT}
RUN git clone https://github.com/tradingAI/go.git && \
    git clone https://github.com/tradingAI/proto.git
WORKDIR ${PROJECT_PATH}
RUN go mod init && go mod tidy
RUN make build_linux

# run-time image
FROM alpine

Label maintainer="zmjhacker@gmail.com"

ENV PROJECT_PATH=/go/src/github.com/tradingAI/tweb

COPY --from=build ${PROJECT_PATH}/main/server /

ENTRYPOINT ["/server"]