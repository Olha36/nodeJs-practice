const http = require('http');

http.createServer(function(req, res) {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello, world! It is my first node.js code');
    res.write('<h1>Task 1</h1>')
    res.end();
  }

  if (url === '/users') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>User1</h2>');
    res.end()
  }
  
}).listen(3000)