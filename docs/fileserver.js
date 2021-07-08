var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var file = "." + q.pathname;
  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('<h1>404</h1>');
      res.write('<h2>Page Not Found</h2>');
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080);