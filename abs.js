function isPositive(num) {
	return num > 0
}

function abs(num) {
	if (num == 0){
		return 0
	}else if (isPositive(num)){
		return num
	}
	return num * -1
}
