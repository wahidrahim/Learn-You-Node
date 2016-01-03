var http = require('http')
  , bl = require('bl');

http.get(process.argv[2], function(res) {
  res.pipe(bl(function(err, data) {
    if (err)
      return console.error(err);

    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
