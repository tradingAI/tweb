run:
	yarn start

install:
	yarn install

REACT_APP_TITLE=Tweb
REACT_APP_LANG=zh_CN

# Without setting `GENERATE_SOURCEMAP=false`, `yarn build` will run into out-of-memory in Docker, which I have no idea why.
#   See https://github.com/wojtekmaj/react-pdf/issues/496 https://stackoverflow.com/questions/53230823/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javas
build_project:
	REACT_APP_TITLE=$(REACT_APP_TITLE) \
	REACT_APP_LANG=$(REACT_APP_LANG) \
	yarn build

lint:
	yarn lint
