var http = require('http')
  , bl = require('bl');

var results = []
  , count = 0;

function httpGet(i) {
  http.get(process.argv[2 + i], function(res) {
    res.pipe(bl(function(err, data) {
      if (err)
        return console.error(err);

      results[i] = data.toString();
      count++;

      if (count === 3) {
        results.forEach(function(result) {
          console.log(result);
        });
      }
    }));
  });
}

for (var i = 0; i < 3; i++)
  httpGet(i);
