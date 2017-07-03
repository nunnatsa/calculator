prod-image:
	docker build -t calculator -f Dockerfile.production .
	
test-image:
	docker build -t calculator-test -f Dockerfile.test .
	
test:
	docker run --rm calculator-test