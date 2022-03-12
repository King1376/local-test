function thousandSymbol(num) {
  let target = String(num);
  const [int, float] = target.split(".");
  const intList = [...int];
  for (let i = intList.length - 1; i > 0; ) {
    if (i - 2 !== 0) {
      intList.splice(i - 2, 0, ",");
    }
    i -= 3;
  }
  console.log(intList.join(""), "intList");
  return `${intList.join("")}.${float}`;
}

function thousandSymbol3(num) {
  let target = String(num);
  const [int, float] = target.split(".");
  const intList = [...int];
  for (let i = intList - 1; i > 0; ) {
    if(!(i%3) && i !== intList.length - 1) {
        intList.splice(i-2, 0, ',')
    }
    i -= 3
  }
  return `${intList.join("")}.${float}`;
}

function thousandSymbol1(num) {
  const target = String(num);
  const [int, float] = target.split(".");
  let intList = Array.from(int);
  intList = intList.reduce((acc, item, idx, arr) => {
    return acc.concat(
      idx !== arr.length - 1 && (arr.length - idx - 1) % 3 === 0
        ? `${item},`
        : item
    );
  }, []);
  return `${intList.join("")}.${float}`;
}
const res = thousandSymbol(1234567895432.33242345352344523);
const res1 = thousandSymbol1(1234567895432.33242345352344523);
const res3 = thousandSymbol1(1234567895432.33242345352344523);
console.log('res: \n', res, "res2: \n", res1, 'res3: \n', res3);
