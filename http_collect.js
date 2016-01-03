var http = require('http');

http.get(process.argv[2], function(res) {
  var body = ''

  res.setEncoding('utf8');
  
  res.on('data', function(data) {
    body += data;
  });

  res.on('end', function() {
    console.log(body.length);
    console.log(body);
  });

  res.on('error', function(err) {
    console.log(err);
  });
});
