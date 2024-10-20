function reverse(arr) {
	let isStr = false
	if (typeof(arr) === "string") {
		arr = arr.split("")
		isStr = true
	}

	for (let i=0; i<parseInt(arr.length/2); i++) {
		let temp = arr[i] 
		arr[i] = arr[arr.length-i-1]
		arr[arr.length-i-1] = temp
	}
	if (isStr) {
		arr = arrToStr(arr)
		return arr
	}
	return arr
}
function arrToStr(val){
	let res = ""
	for (const x of val){
		res += x
	}
	return res
}


