function nasa(num) {
	let word = ""
	for (let i=1; i<= num; i++) {
		if (i%3 == 0 && i%5 == 0) {
			word += "NASA"
		}else if (i%3 == 0) {
			word += "NA"
		}else if (i%5 == 0){
			word += "SA"
		}else {
			word += String(i)
		}				
		if (i<num) {
			word += " "
		}
	}
	return word
}