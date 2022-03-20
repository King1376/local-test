function myFlat(dep = 1) {
  const result = [];
  if(!(dep > 0)) {
    dep = 0
  }
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    let newItem = [item];
    if (dep > 0 && Array.isArray(item)) {
      newItem = item.myFlat(dep-1);
    }
    result.push(...newItem);
  }
  return result;
}

Array.prototype.myFlat = myFlat;

const testData = [
    1,
    [2],
    [[3]],
    [[[4]]],
    [[[[5]]]]
];
const custom = testData.myFlat();
const native = testData.flat('king')
console.log("custom: ", custom);
console.log("native: ", native);
