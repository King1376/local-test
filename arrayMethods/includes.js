function myIncludes(target) {
    let isHave = false
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if(target === item) {
            isHave = true
            break
        }
    }
    return isHave
}

Array.prototype.myIncludes = myIncludes
const testData = [{name: 'king'}]
const custom = testData.myIncludes({name: 'king'})
const native = testData.myIncludes({name: 'king'})

console.log('custom: ', custom, 'native: ', native);