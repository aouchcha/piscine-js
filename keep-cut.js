function cutFirst(str) {
	return str.slice(2)
}

function cutLast(str) {
	return str.slice(0,str.length-2)
}

function cutFirstLast(str) {
	return str.slice(2,str.length-2)
}

function keepFirst(str) {
	let res = str.slice(0,2)
	return res
}

function keepLast(str) {
	let res = str.slice(-2)
	return res
}

function keepFirstLast(str) {
	if (str.length < 5) {
		return str
	}
	let res = keepFirst(str) + keepLast(str)
	return res
}

console.log(cutFirstLast('af'))
