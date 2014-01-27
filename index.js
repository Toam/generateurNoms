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
  /*
  setTimeout(function() {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send('{"name": "' + noms[Math.floor(Math.random() * noms.length)] + '"}');
  }, 500);
  */
  generateur = new Generateur();
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send('{"name": "' + generateur.getName() + '"}');
});

app.listen(3000);
