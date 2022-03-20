console.log(1);

setTimeout(() => {
    console.log(2);
})

// 1 5 6 3 7 8 4 2 9
Promise.resolve().then(() => console.log(3))

setImmediate(() => console.log(4))

new Promise(resolve => {
    console.log(5);
    resolve()
    console.log(6);
}).then(() => {
    console.log(7);
})

Promise.resolve().then(() => {
    console.log(8);
    Promise.resolve().then(() => console.log(9))
})


