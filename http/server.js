/**
 * 搭建http服务器, 用于处理用户发送的http请求
 * 需要使用node提供的http模块
 * */

// 加载一个http模块
let http = require('http');
// 通过http模块下的createServer创建并返回一个web服务器对象
let server = http.createServer();

//监听错误
server.on('error', function (err) {
  console.log(err)
})

server.on('listening', function () {
    console.log('listening...')
})
server.listen(8081, 'localhost');

server.on('request', function (req, res) {
  console.log('有客户端请求了')
  // res.writeHead('状态码-200', '描述文字', '头信息-{content-type: 'text/html'}')
  //
  res.write('<h1>"hello"<h1/>');
  res.end()
  // console.log(req)
  // console.log(res)
})
console.log(server.address())

