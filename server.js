var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/client')));


// app.listen(3000,function(req,res){
//   console.log('Server is running on port 3000');
// });
app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'),function(){
  console.log('Server is running');
});
// http.createServer(function (req,res){
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   res.end('Hello');
// }).listen(3000,'103.81.236.222');
// app.listen(3000,'103.81.236.222' || 'localhost', function(){
//   console.log('Server started');
// });
