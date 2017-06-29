const restify = require('restify');
const logger = require('morgan');
const port = process.env.PORT || 8080;
const app = restify.createServer({
    name: 'Restful api demo',
    version: '1.0.0'
});

app.use(logger('dev'));

app.get('/users/:name', function(req,res, next){
    res.send(req.params);
});

app.listen(port, function () {
    console.log('%s is listening on port %s', app.name, port);
});