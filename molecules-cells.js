function RNA(str) {
	let res = ""
	for (let i=0; i<str.length; i++) {
		res +=  convert(str[i], true)
	}
	return res
}

function DNA(str) {
	let res = ""
	for (let i=0; i<str.length; i++) {
		res += convert(str[i], false)
	}
	return res
}

function convert(ch, check) {
	switch (ch) {
		case "G" :
			return "C"
		case "C":
			return "G"
		case "A":
			if(check) {
				return "U"
			}
			return "T"
		case "T":
			return "A"
		case "U":
			return "A"
	}
}

