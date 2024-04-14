var http = require('http');

////////////////////////////////////////////////////////////////////
// 아래는 요청이 들어오면 무슨 요청이든 Hello World 만 출력하고 끝낸다.
var handler1 = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}

http.createServer(handler1).listen(3001);
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 아래는 요청이 들어오면 요청한 url 경로에 따라 다른 코드를 수행한다.
// 그런데 url 경로에 따라 수행할 코드가 정적으로 정해져 있고 변경이 안된다.
var handler2 = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url == '/') {
    res.end('Hello World!');
  } else if (req.url == '/se') {
    res.end('I love software engineering!')
  }
}

http.createServer(handler3).listen(3002);
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 아래는 url 경로에 따라 호출할 함수를 사전에 맵핑한다.
// 그 후에 실제 url 요청이 들어오면 등록된 함수를 호출해준다.
// 이 방식은 우리가 "url 요청" 이라는 이벤트에 따라 이벤트 핸들러 맵을 관리하는 것이다.
var urlHandlers = {}
var registerUrlHandler = function (url, h) {
  urlHandlers[url] = h
}

urlHandlers['/'] = function(req, res) {
  res.end('Hello World!')
}
urlHandlers['/se'] = function(req, res) {
  res.end('I love software engineering!')
}

registerUrlHandler('/', function(req, res) {
  res.end('Hello World!')
})

registerUrlHandler('/se', function(req, res) {
  res.end('I love software engineering!')
})

var handler3 = function (req, res) {
  if (req.url in urlHandlers) {
    urlHandlers[req.url](req, res)
  } else {
    res.end('No handlers');
  }
}

http.createServer(handler3).listen(3003);
////////////////////////////////////////////////////////////////////
