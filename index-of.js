function indexOf(arr, val, start) {
	// console.log(start)
	if (typeof(start) === "undefined") {
		start = 0
	}
	// console.log(start)

	for (let i=start; i< arr.length; i++) {
	// console.log(arr[i], val)

		if (arr[i] == val) {
			return i
		}
	}
	return -1
}

function lastIndexOf(arr, val, start) {
	if (typeof(start) === "undefined") {
		start = arr.length
	}
	for (let i=start; i>=0; i--) { 
		if (arr[i] == val) {
			return i
		}
	}
		return -1
}

function includes(arr, val, start) {
	if (typeof(start) === "undefined") {
		start = 0
	}
	if (indexOf(arr, val, start) != -1 ) {
		return true
	}
	return false
}

