var http = require('http')

http.createServer(function(req, res) {
  var body = ''

  req.setEncoding('utf8')

  req.on('data', function(str) {
    body += str.toUpperCase()
  })

  req.on('end', function() {
    res.end(body)
  })
}).listen(process.argv[2])
