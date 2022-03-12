function flatObject(obj, preKey = '') {
    const result = {}
    Object.keys(obj).forEach(key => {
        const newKey = preKey ? `${preKey}.${key}` : key
        if(!isObject(obj[key])) {
            result[newKey] = obj[key]
        } else {
            Object.assign(result, flatObject(obj[key], newKey))
        }
    })
    return result
}

function isObject(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === 'Object'
}
function unArrayAandObject(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}
const test = {
	a: {
		b: {
			c: {
				dd: 'abcdd'
			}
		},
		d: {
			xx: 'adxx'
		},
		e: 'ae'
	},
    f: null,
    g: [{name: 'kik'}]
}

const res = flatObject(test)
console.log(res, Object.keys(res));
Object.keys(res).forEach(key => console.log(`test.${key}`))