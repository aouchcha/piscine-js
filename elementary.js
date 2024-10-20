function multiply(a, b){
	let signe = false
	let res = 0
	if (a === 0 || b === 0){
		return 0
	}
	if (b < 0){
		signe = true
		b = -b
	}
	for (let i = 0; i < b; i++) {
		res += a
	}
	if (signe) {
		return -res
	}
	return res
}


function divide(a, b) {
	let check = false
	if (multiply(a,b) < 0){
		check = true
	}
	if (b < 0) {
		b = -b
	}
	if (a < 0){
		a = -a
	}
	if (b === 0){
		return "impossible"
	}
	if (b > a){
		return 0
	}
	if (a === b) {
		return 1
	}
	if(b === 1){
		return a
	}
	
	let count = 0
	for(;;) {
		a -= b
		if (a >= 0) {
			count ++
		}else{
			break
		}
		
	}
	if (check) {
		return -count
	}
	return count
}

function modulo(a, b) {
	return a - multiply(b , divide(a,b))
}
console.log( divide(-123, 22))
