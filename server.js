var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/client')));

app.route('/*')
  .get(function(req,res){
    res.sendFile(__dirname + '/client/index.html');
  });

app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'),function(){
  console.log("Server started");
});
