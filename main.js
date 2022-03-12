// function test(){
//     return new Promise((resolve, reject) => {
//         reject({ msg: '失败', code: 666 })
//         resolve('hello await')
//     })
// }

// async function fun() {
//     try {
//         await test()
//     } catch ({ msg, code }) {
//         console.log(msg, code)
//     }
// }
// fun()

const isUndef = value => value === 'undefined'
function myReduce(callback, defaultValue) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must to be arry");
  }
  let acc = defaultValue 
  this.forEach((item, idx) => {
    acc = isUndef(defaultValue) && idx === 0 ? this[0] : callback(acc, item, idx, this);
  });
  return acc;
}
Array.prototype.myReduce = myReduce;

const list = [1, 2, 3, 4];
const res = list.myReduce((acc, item, idx, arr) => {
  console.log(`acc: ${acc}, item: ${item}, idx: ${idx}, arr: `, arr);
  //   if (idx === arr.length - 1) {
  //     return "king";
  //   } else {
  //     return acc + item;
  //   }
}, 0 , 0, {});
// myReduce(()=>{},)
console.log("res: ", res);
