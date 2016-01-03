var net = require('net');

var server = net.createServer(function(socket) {
  socket.end(timeStamp(new Date));
});

server.listen(process.argv[2]);

function timeStamp(d) {
  var zf = function(n) {
    return ((n < 10)? '0' : '') + n;
  }

  return d.getFullYear() + '-' 
  + zf(d.getMonth() + 1) + '-' 
  + zf(d.getDate()) + ' ' 
  + zf(d.getHours()) + ':' 
  + zf(d.getMinutes()) + '\n';
}
