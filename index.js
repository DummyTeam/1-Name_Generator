var express = require('express');

var app = express();

app.set('view engine', 'html');

app.use(express.static('assets'));

// Port number 2424
app.listen(2424);
console.log('Server is listening...');

app.get('/', function(req, res) {
  console.log('200 Home page');
  res.sendFile(__dirname + '/views/index.html');
});

app.get('*', function(req, res) {
  console.log(req.url);
});
