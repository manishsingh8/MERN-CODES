var http = require('http');
// var url ='https://github.com/manishsingh8/MERN-CODES';
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);