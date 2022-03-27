function isDef(value) {
  return value === undefined;
}
/**
 * 遍历数组，且每次执行其回调函数，上一次回调函数的返回值作为本次回调函数的第一个参数，最后一次回调函数的返回值作为reduce函数的返回值返回
 * 如果reduce函数的第二个参数没有传的时候，数组的第一个元素作为第一个回调函数的第一个参数，并且数组的第二个元素开始遍历
 * 如果有传递第二个参数时，作为第一个回调数的第一个参数，且数组的第一个元素开始遍历
 * @param {Function} callback 回调函数
 * @param {any} def 回调函数的第一个参数的默认值
 * @returns 
 */
function myReduce(callback, def) {
  let acc = isDef(def) ? this[0] : def;
  let starIndex = def === undefined ? 1 : 0;
  for (let i = starIndex; i < this.length; i++) {
    const item = this[i];
    acc = callback.call(null, acc, item, i, this);
  }
  return acc;
}

Array.prototype.myReduce = myReduce;
const testData = [1, 2, 3, 4, 5];
const testData1 = {
  name: "Lebron",
  num: 6,
  address: "美国洛杉矶",
  stream: "湖人",
  old: 37,
};

const obj = {
  name: "姓名",
  num: "号码",
  address: "住址",
  stream: "球队",
  old: "年龄",
};

// const custom = testData.myReduce((acc, item, idx) => acc+item, null)
// const native = testData.reduce((acc, item, idx) => acc+item,null)
const custom = testData.myReduce((acc, item, idx, arr) => {
  if (idx !== arr.length - 1) {
    return acc + item;
  } else {
    return "king";
  }
}, null);
const native = testData.reduce((acc, item, idx, arr) => {
  if (idx !== arr.length - 1) {
    return acc + item;
  } else {
    return "king";
  }
}, null);

// const custom = Object.keys(testData1).myReduce((acc, key, idx) => acc.concat({label: obj[key], value: testData1[key]}),[])

// const native = Object.keys(testData1).reduce((acc, key, idx) => acc.concat({label: obj[key], value: testData1[key]}),[])

console.log("custom: ", custom, "native: ", native);
