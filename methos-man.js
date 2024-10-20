console.log(words("hi my name is achraf"))
console.log(sentence(["wech", "fiha", "sahra", "wella"]))
console.log(yell("achraf"))
console.log(whisper("AYMANE"))
console.log(capitalize("aNa Howa aNa"))

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
	firstchar = str.slice(0,1)
	rest = str.slice(1,str.legth)
	firstchar = firstchar.toUpperCase()
	return firstchar+rest
}
