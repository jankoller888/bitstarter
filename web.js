var express = require('express');
var fs = require('fs');
var buff = new Buffer(27);
var fd = fs.openSync('index.html','r');
fs.readSync(fd,buff,0,buff.length,0);
fs.closeSync(fd);
//console.log(buff.toString());
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
