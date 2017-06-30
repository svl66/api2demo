module.exports = function(app){

    app.get('/users/:name', function(req,res, next){
        res.send(req.params);
    });

}