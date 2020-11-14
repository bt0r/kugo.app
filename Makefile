.PHONY: install
install:
	docker-compose run --rm node npm install
.PHONY: start
start: node_modules
	docker-compose up
.PHONY: deploy
deploy:
	docker-compose run --rm node npm run build
	rm -rf docs/* && cp -rf build/* docs/
.PHONY: sh
sh:
	docker-compose run --rm node sh