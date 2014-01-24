var express = require('express');
var app = express();

app.configure(function(){
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  app.use(express.static(__dirname + '/static'));
});

app.get('/name', function(req, res){
  
  noms = ["Jean Aimar", "Ella Faim", "Amer Credi"];
  /*
  setTimeout(function() {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send('{"name": "' + noms[Math.floor(Math.random() * noms.length)] + '"}');
  }, 500);
  */
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send('{"name": "' + noms[Math.floor(Math.random() * noms.length)] + '"}');
});

app.listen(3000);
