install: install-deps install-flow-typed

start:
	npx nodemon --exec npx babel-node server/bin/slack.js

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm run test -- --coverage
	
watch:
	npm run test -- --watch

check-types:
	npx flow

lint:
	npx eslint . --ext js,jsx

publish:
	npm publish

analyse:
	rm -rf dist
	npm run analyse

.PHONY: test
