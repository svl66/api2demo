module.exports = function (app) {
    /*
    app.get('/users/:name', function(req,res, next){    
        res.send(req.params);
    });
    */
    app.get('/users', function (req, res, next) {
        res.send([
            {
                "name": {
                    "username": "søren",
                    "givenname": "Søren",
                    "sirname": "Hr. Søren"
                }
            }, {
                "name": {
                    "username": "Joey",
                    "givenname": "Jerry",
                    "sirname": "Mr. Ramone"
                }
            }

        ]);
    });


    app.post('/users', function (req, res, next) {
        res.send(201, req.params);
    });

    app.get('/users/:username', function (req, res, next) {
        res.send(req.params);
    });

    app.put('/users/:username', function (req, res, next) {
        res.send(405);
    });

    app.patch('/users/:username', function (req, res, next) {
        res.send(405);
    });

    app.del('/users/:username', function (req, res, next) {
        res.send(405);
    });
}