var express = require('express');
var app = express();

var Generateur = require('./generateur.js');

app.configure(function(){
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  app.use(express.static(__dirname + '/static'));
});

app.get('/name', function(req, res){
  generateur = new Generateur();

  /*
  setTimeout(function() {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send(generateur.getName(req.query));
  }, 500);
  */
  
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(generateur.getName(req.query));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on port " + port);
});
