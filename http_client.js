var http = require('http')

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8') // automatically converts to strings
  response.on('data', console.log)
})
