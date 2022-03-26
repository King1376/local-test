function myFlat(dep) {
  const result = [];
  if(dep === undefined) {
      dep = 1 
  }
  if(dep < 1) {
    return this
  }
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    let newItem = [item];
    if (dep > 0 && Array.isArray(item)) {
      newItem = item.myFlat(dep-1);
    }
    result = result.concat(newItem)
  }
  return result;
}

function fl(dep) {
    let result = []
    if(dep === undefined) {
        dep = 1
    }
    if(dep < 1) {
        return this
    }
    for(let i = 0; i < this.length; i++) {
        result = result.concat((dep > 0 && Array.isArray(this[i])) ? this[i].fl(dep - 1) : this[i])
    }
    return result
}


function flMap(dep) {
    if(dep === undefined) {
         dep = 1
    }
    if(dep < 1) {
        return this
    }
    return this.reduce((acc, item) => acc.concat((Array.isArray(item) && dep > 0) ? item.flMap(dep - 1) : item), [])
}

Array.prototype.myFlat = myFlat;
Array.prototype.fl = fl
Array.prototype.flMap = flMap

const testData = [
    1,
    [2],
    [[3]],
    [[[4]]],
    [[[[5]]]]
];
const custom = testData.myFlat();
const native = testData.flat()
console.log("custom: ", custom);
console.log("native: ", native);
