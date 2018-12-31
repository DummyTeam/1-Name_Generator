var express = require('express');
var homePageController = require('./controllers/homePageController');

var app = express();

app.use(express.static('assets'));

// firing controller
homePageController(app);

// Port number 2424
app.listen(2424);
console.log('Server is listening...');

// 404 not found route
app.get('*', function(req, res) {
  console.log(req.url);
  res.send('404 not found - ' + req.url);
});
