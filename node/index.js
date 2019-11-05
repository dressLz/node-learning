
var fs = require('fs');
var filedir = '../project/source'

//监听
fs.watch(filedir, function (ev, file) {
    // console.log(ev + '===>' +file) 这里不需要监听file是否有内容， 有可能是删除
    // 只要有文件发生变化，我们就需要多这个文件夹下所有的文件读取，进行合并
    fs.readdir(filedir, function (err, datalist) {
      let arr = [];
      datalist.forEach((f)=>{
         const info = fs.statSync(filedir + '/' + f)
         if (info.mode == 33206) {
           arr.push(filedir + '/' + f)
         }
      })
      console.log(arr)
      // 读取数组中的文件内容并合并
      let content = '';
      arr.forEach((f) => {
        const itemContent = fs.readFileSync(f)
        // console.log('当前读取到的文件内容', itemContent.toString())
        content += itemContent.toString();
        // 将内容写入（合并）到js/index.js
        fs.writeFileSync('../project/js/index.js', content)
      })
      console.log('--------------', content)
    })
})
