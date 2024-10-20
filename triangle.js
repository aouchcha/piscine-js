function triangle(str, num) {
	let res = ""
	let temp =  1
	for (let i=0; i<num; i++) {
		
		for (let j = 0; j < temp; j++) {
			res += str
		}
		if(i < num-1) {
			res += "\n"
		}
		temp ++
	}
	return res
}
