module.exports = function(app) {

  app.get('/', function(req, res) {
    var path = __dirname.split('\\');
    var strippedPath = path.slice(0, path.length-1).join("\\");
    console.log(__dirname + ' - ' + strippedPath);

    res.sendFile('views/index.html', {
      root: strippedPath
    });
  });

  app.get('/getRandomName', function(req, res) {
    console.log('200 Home page');
    res.send('Amiraslan Bakhshili');
    //res.sendFile(__dirname + '/views/index.html');
  });

}
