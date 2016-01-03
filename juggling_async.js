var http = require('http');

var bodies = []
  , finished = 0;

process.argv.slice(2).map(function(url, i) {
  http.get(url, function(res) {
    bodies[i] = '';

    res.setEncoding('utf8');

    res.on('data', function(data) {
      bodies[i] += data;
    });

    res.on('end', function() {
      finished++;

      if (finished === 3) {
        bodies.map(function(body) {
          console.log(body);
        });
      }
    });
  });
});
