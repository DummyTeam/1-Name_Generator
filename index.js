var express = require('express');
var mainController = require('./controllers/mainController');

var app = express();

app.use(express.static('assets'));

// firing controller
mainController(app);

// Port number 2424
app.listen(2424);
console.log('Server is listening...');
