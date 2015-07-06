var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('Hello World?');
  fs.readFile('./public/index.html', function (err, data) {
      res.send(data.toString());
  });
});



var server = app.listen(9001, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


