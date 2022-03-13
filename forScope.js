// 1. 利用setTimeout的第三个参数, IE9及更早的版本不支持
for (var i = 0; i < 10; i++) {
    setTimeout(console.log, 1000 * (i + 1), i)
    setTimeout(value => console.log(value), 1000 * (i + 1), i)
}

// 2. 利用let 关键字
for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1000 * (i + 1))
}

// 3. IIFE立即执行函数
for (let i = 0; i < 10; i++) {
    (function(value) {
        setTimeout(() => console.log(value), 1000 * (value + 1))
    })(i)
}

// 4. Promise
for (let i = 0; i < 10; i++) {
    Promise.resolve(i).then(value => setTimeout(() => console.log(value), 1000 * (value + 1)))
}