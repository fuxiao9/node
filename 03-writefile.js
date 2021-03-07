var fs = require('fs');
// 同步写入文件
// 阻塞
// fs.writeFileSync('./data/2.txt', '222222222222hello node.js');
// console.log('程序执行结束');

// 异步写入文件
fs.writeFile('./data/3.txt', '我使用异步方式写入的文件内容：hello world', function (error) {
    // error 用于保存当写入文件发生错误时的相关信息
    if (error) {
        console.log('文件写入错误');
    } else {
        console.log('文件写入成功');
    }
})
console.log('程序执行结束');