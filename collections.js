function arrToSet(val) {
	return new Set(val)
}

function arrToStr(val){
		let res = ""
		for (const x of val){
			res += x
		}
		return res
}

function setToArr(val) {
	return Array.from(val)
}

function setToStr(val) {
	let res = ""
	for (const x of val) {
		res += x
	}
	return res
}

function strToArr(val) {
	return val.split("")
}


function strToSet(val) {
	let res = val.split("") 
	return new Set(res)
}

function mapToObj(val) {
	const obj = Object.fromEntries(val)
	return obj
}

function objToArr(val) {
	let arr = []
	const res = Object.entries(val)
	for (const x of res){
		arr.push(x[1])
	}
	return arr
}

function objToMap(val) {
	return new Map(Object.entries(val))
}

function arrToObj(arr) {
	let index = 0
    return arr.reduce((acc, val) => {
        acc[index++] = val
        return acc
    }, {})
}

function strToObj(val) {
	let temp = val.split("")
	let res = arrToObj(temp)
	return res
}


const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
console.log(arrToStr(arr)) // -> '1213'
console.log(setToArr(set)) // -> [1, 2, 3]
console.log(setToStr(set)) // -> '123'
console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)) // -> [45, 75, 24]
console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }