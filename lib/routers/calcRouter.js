var calcRouter = require('express').Router();
// This middleware performs the existence and the nature of the query parameters
// If one of them is missing or with wrong format, the server return 400.
calcRouter.use(function(request, response, next){
    var firstStr = request.query.first;
    var secondStr = request.query.second;
    if ( !firstStr ) {
        return error(response, {status : 400, message : "Missing required parameter 'first'" });
    }
    if ( !secondStr ) {
        return error(response, {status : 400, message : "Missing required parameter 'second'" });
    }
    var first = parseFloat(firstStr);
    var second = parseFloat(secondStr);
    if ( isNaN(first) ) {
        return error(response, {status : 400, message : "The parameter 'first' is not a number" });
    }
    if ( isNaN(second) ) {
        return error(response, {status : 400, message : "The parameter 'second' is not a number" });
    }
    // store the query parameters as numbers in the request for later usage
    request.first = first;
    request.second = second;
    next(); // go handle the request
});
calcRouter.route('/add')
    .get(function(request, response){
        return validResponse(response, request.first + request.second);
    });
// Request handlers
calcRouter.route('/sub')
    .get(function (request, response) {
        return validResponse(response, request.first - request.second);
    });
calcRouter.route('/mul')
    .get(function (request, response) {
        return validResponse(response, request.first * request.second);
    });
calcRouter.route('/div')
    .get(function (request, response) {
        if ( request.second == 0 ) {
            return error(response, {status : 400, message : "Dividing by zero is not allowed"});
        }
        return validResponse(response, request.first / request.second);
    });
// error handler
function error(response, err) {
    response.statusCode = err.status;
    response.type("text/plain");
    response.send(err.message);
}
// valid response
function validResponse(response, result) {
    response.type('application/json');
    response.statusCode = 200;
    response.send({"result" : result});
}
module.exports = calcRouter;

