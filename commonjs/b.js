exports.done = false;
var a=require('./a')
console.log('在bjs之中，adone=%j',a.done);
a.done = 'king'
var c=require('./a')
console.log('b中修改a的值', a.done, 'a中的值： ', c.done)

exports.done = true;
console.log('b.js执行完毕')
