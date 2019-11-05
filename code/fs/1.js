var fs = require('fs');

/**
 * fs.open(path, flags, [mode], callback)
 * path: 要打开文件的路径
 * flags: 要打开文件的方式 读/写
 * [mode]：设置文件的模式 读/写/执行  4/2/1
 * cakkback: 回调
 *    err: 文件打开的错误提示
 *    fd: 被打开文件的标识
 */

 // 异步方法
 // fs.open('index.txt','r', function(err, fd){
 //     console.log(err)
 //     console.log(fd)
 // })

/**
 * fa.read(fd, buffer, offset, length, pasition, callback )
 * 读取文件
 * fd: 编号
 * buffer： buffer对象
 * offset: 新的内容添加到buffer中的起始位置
 * length: 添加到buffer重的长度
 * position: 读取文件中的起始位置
 * callback：
 *    err: 错误
 *    length长度
 *    buffer对象
 */

// 同步方法
var fd = fs.openSync('index.txt','r+')
console.log('fd', fd)
var fdBuffer = new Buffer(10);

fs.read(fd, fdBuffer, 0, 4, null, function (err ) {
    console.log(fdBuffer)
})

/**
 * fs.write(fd, buffer, offset, length, posttion, callback)
 * fd: 打开的文件
 * buffer: 要写入的数据
 * offset: buffer对象中要写入的数据的起始位置
 * length: 要写入的buffer数据的长度
 * position: fd中的起始位置
 */
var addfd = new Buffer('12345');
fs.write(fd, addfd, 0, 5, 5, function (err, len, buf) {
    console.log(err)
    console.log(len)
    console.log(buf)
})

