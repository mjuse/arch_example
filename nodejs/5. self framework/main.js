var http = require('http');

var handler1 = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}

// var handler2 = function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   if (req.url == '/') {
//     res.end('Hello World!');
//   } else if (req.url == '/se') {
//     res.end('I love software engineering!')
//   }
// }

// var urlHandlers = {}
// var registerUrlHandler = function (url, h) {
//   urlHandlers[url] = h
// }

// urlHandlers['/'] = function(req, res) {
//   res.end('Hello World!')
// }
// urlHandlers['/se'] = function(req, res) {
//   res.end('I love software engineering!')
// }

// registerUrlHandler('/', function(req, res) {
//   res.end('Hello World!')
// })

// registerUrlHandler('/se', function(req, res) {
//   res.end('I love software engineering!')
// })

// var handler3 = function (req, res) {
//   if (req.url in urlHandlers) {
//     urlHandlers[req.url](req, res)
//   } else {
//     res.end('No handlers');
//   }
// }

http.createServer(handler1).listen(3000);
