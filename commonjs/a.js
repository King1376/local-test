exports.done =false
var b= require('./b')
console.log('在ajs之中，b.done=%j', b.done)
exports.done =true;
console.log('a.js 执行完毕')
