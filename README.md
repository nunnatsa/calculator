# Calculator
This is a code example to demonstrate testing within a docker container.
## The Calculator Server
This is a simple server that implement a HTTP calculator, as follows:

```GET /calculator/add``` - add two floating point numbers.

```GET /calculator/sub``` - subtract a floating point number from a second one.

```GET /calculator/mul``` - multiple two floating point numbers.

```GET /calculator/div``` - divide a floating point number by another one.

Each one of these API requires two query parameters: first and second; for example,

```GET /calculator/minus?first=3.4&second=1.4```

will return a json object of:

```{"result" : 2}```

## The Dockerfile
There are actually two Dockerfiles. One for production, and one for testing. The second uses the first as a base image, and so it contains all the application code and configurations, and running within the same environment as the production container; e.g. the same node, npm and packages versions.
 
## License 
The MIT License (MIT)
