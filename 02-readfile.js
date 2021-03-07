// fs---file system 文件系统
// 在node.js 中如果要进行文件的操作，那么就必须加载fs这个核心模块
// 在fs 这个模块中提供了文件操作的相关API
// 使用require 方法加载fs 模块
var fs = require('fs');
// console.log(fs);

// 同步读取文件内容
// 阻塞
// var content = fs.readFileSync('./data/1.txt');
// console.log('文件内容是：' + content);
// console.log('程序执行结束');


// 异步读取文件内容（异步编程）
// readFile中必须要有一个回调函数，当异步读取文件成功后，自动调用该函数
fs.readFile('./data/1.txt', function (error, content) {
    // 回调函数的第一个参数：error 用于保存当读取文件发生错误时的相关信息
    //          第二个参数：content 用于读出文件内容
    if (error != null) {
        console.log('文件读取错误');
    } else {
        console.log(content.toString());
    }
})
console.log('程序执行结束');