const restify = require('restify');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 8080;
const app = restify.createServer({
    name: 'Restful api demo',
    version: '1.0.0'
});

app.use(logger('dev'));

require(path.join(__dirname, 'routes', 'index'))(app);

app.listen(port, function () {
    console.log('%s is listening on port %s', app.name, port);
});