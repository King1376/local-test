function flatArray(list) {
  const result = [];
  list.forEach((item) => {
    const newItem = Array.isArray(item) ? flatArray(item) : [item]
    result.push(...newItem)
  });
  return result;
}

const test = [2, [3, 4], [[5], [6,[[[[[[null]]]]]]]]];
const res = flatArray(test)
console.log(res);