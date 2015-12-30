var fs = require('fs');

var file_path = process.argv[2];
var contents = fs.readFileSync(file_path).toString();
var lines = contents.split('\n').length - 1;

console.log(lines);
