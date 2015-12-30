var fs = require('fs'),
    path = require('path');

var directory = process.argv[2],
    extension = process.argv[3];

fs.readdir(directory, function(err, list) {
  list.forEach(function(file) {
    if (path.extname(file) === '.' + extension)
      console.log(file);
  });
});
