function mySort(compareFn) {
    
    const list = this
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if((typeof compareFn === 'function' && compareFn(this[i], this[j]) > 0) || compareFn === undefined) {
                [list[i], list[j]] = [this[j], this[i]]
            }
        }
    }
    return this
}



Array.prototype.mySort = mySort

const testData2 = ['March', 'Jan', 'Feb', 'Dec']
const testData3 = [4, 2, 5, 1, 3]
const testData1 = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ]
const testData = testData1
// const custom = testData.mySort((a,b) => a.value - b.value)
// const native = testData.mySort((a,b) => a.value - b.value)
const custom = testData1.mySort((a,b) => {
    a.name = a.name.toUpperCase()
    b.name = b.name.toUpperCase()
    if(a.name > b.name) {
        return 1
    }else if(a.name < b.name) {
        return -1
    }
})
const native = testData1.mySort((a,b) => {
    const aName = a.name.toUpperCase()
    const bName = b.name.toUpperCase()
    if(aName > bName) {
        return 1
    } else if(aName < bName) {
        return -1
    } else {
        return 0
    }
})

console.log('custom: ', custom, 'native: ', native);
