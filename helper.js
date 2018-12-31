var names = require('./information');


var trimDirectory = function(data){
  var path = data.split('\\');
  return path.slice(0, path.length-1).join("\\");
}

var getRandomName = function(){
  return names.firstNames[parseInt(Math.random() * (names.firstNames.length-1))] + " " + names.lastNames[parseInt(Math.random() * (names.lastNames.length-1))];
}

module.exports = {
  trimDirectory,
  getRandomName
}
