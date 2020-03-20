FROM mickeyzhoudocker/devel:latest AS build

Label maintainer="zmjhacker@gmail.com"

ENV PROJECT_PATH=/go/src/github.com/SnakeHacker/tweb

WORKDIR ${PROJECT_PATH}

ENTRYPOINT ["bash", "entrypoint.sh"]
