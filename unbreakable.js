function split(str, sub) {
	if (sub === undefined){
		return [str]
	}
	let word = ""
	let res = []
	if (sub != "") {
		for (let i=0; i<str.length; i++) {
			if (str[i] != sub[0]) {		
				word += str[i]
			}else{
				let k = i
				let count = 0
				let check = false
				for (let j=0; j <sub.length; j++) {
					if (str[k] != sub[j]) {
						count = j+1
						check = true
						break
					}
					k++
				}
				if (!check){
					res.push(word)
					word = ""
					i += sub.length-1
				}else {
					word += str[i]	
				}
			}
		}
		
			res.push(word)
			word = ""	
	}else {
		
		for (let i=0; i<str.length; i++) {
			res.push(str[i])
		}
	}
	return res
}

function join(arr, sub) {
	if (sub === undefined) {
		sub = ','
	}
	let word = ""
	for (let i=0; i < arr.length; i++) {
		if (i < arr.length-1) {
			word += arr[i] + sub
		}else{
			word += arr[i]
		}
	}
	return word
}
console.log(split('Riad', ''))
