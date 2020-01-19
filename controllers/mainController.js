var helper = require('../helper');

module.exports = function(app) {


  // Landing page
  app.get('/', function(req, res) {
    //res.sendFile('views/index.html', {
    //  root: helper.trimDirectory(__dirname)
    //});
	res.sendFile('views/index.html', { root: __dirname });

  });

  // Random name api
  app.get('/getRandomName', function(req, res) {
    res.send(helper.getRandomName());
  });

  // 404 not found route
  app.get('*', function(req, res) {
    res.send('404 not found - ' + req.url);
  });

}
