var http = require('http')
  , url = require('url')

http.createServer(function(req, res) {
  if (req.method === 'GET') {
    var path = url.parse(req.url).pathname
      , iso_str = url.parse(req.url, true).query.iso
      , date = new Date(iso_str)
      , unixtime = Date.parse(iso_str)

    if (path === '/api/parsetime') {
      res.end(JSON.stringify({
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
      }))
    }
    if (path === '/api/unixtime') {
      res.end(JSON.stringify({
        'unixtime': unixtime
      }))
    }
  }
}).listen(process.argv[2])
