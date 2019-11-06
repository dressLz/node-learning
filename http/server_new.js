// 加载一个http模块
let http = require('http');
let url = require('url');
let fs = require('fs');
// 通过http模块下的createServer创建并返回一个web服务器对象
let server = http.createServer();

let HtmlDir = __dirname + '/html/';
server.on('request', function (req, res) {
    let urlStr = url.parse(req.url)
    console.log(urlStr.pathname)
    switch (urlStr.pathname) {
        case '/':
            // 首页
            sendData(HtmlDir + 'index.html', req, res)
            break;
        case '/user':
            // 用户首页
            sendData(HtmlDir + 'user.html', req, res)
            break;
        default :
            sendData(HtmlDir + 'err.html', req, res)
            break;
    }
});

function sendData(file, req, res) {
  fs.readFile(file, function (err, data) {
      if (err) {
          res.writeHead(404, {
              'content-type': 'text/html;charset=utf-8'
          })
          res.end('<h1>页面丢失<h1/>')
      } else {
          res.writeHead(200, {
              'content-type': 'text/html;charset=utf-8'
          })
          res.end(data)
      }
  });
}
server.listen(8081, 'localhost');
