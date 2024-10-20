function letterSpaceNumber(str) {
	let n = str.match(/[a-z]\s\d\b/ig)
	if (n === null){
		return []
	}
	return n
}
console.log(letterSpaceNumber('He iS 8or9 years old, not 10.'))

