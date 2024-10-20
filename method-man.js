function words(str){
	return  str.split(' ')
}

function sentence(slice){
	return slice.join(' ')
}

function yell(str) {
	return str.toUpperCase()
}

function whisper(str) {
	return "*"+str.toLowerCase()+"*"
}

function capitalize(str) {
	str = str.toLowerCase()
	let firstchar = str.slice(0,1)
	let rest = str.slice(1,str.legth)
	firstchar = firstchar.toUpperCase()
	return firstchar+rest
}
