// try {
//     throw '异常'
//     // setTimeout(()=>{ throw '异常' },0)
//     // Promise.reject('异常')
// } catch (error) {
//   console.log(error)
// }

// try catch 捕获错误且报出错误，且程序往下执行
// try {
//   throw "程序执行错误";
// } catch (error) {
//   console.log(error);
// }
// console.log("同步已执行");


//  Promise 捕获错误
new Promise((resolve, reject) => {
    try {
        console.log(c )
    } catch (error) {
        console.log(`Promise 执行器函数中的错误捕获：${error}`);
    }

}).catch(err => console.log(`promise catch 捕获错误： ${err}`))