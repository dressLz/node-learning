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
server.listen(8080, 'localhost');

server.on('request', function () {
  console.log('有客户端请求了')
})
console.log(server.address())

