function ionOut(str){
	let patt = /[a-z]*t(?=ion)/ig
	let res = str.match(patt) || []
	return res
}
