function findExpression(num) {
	let res1 = 1
	let res = "1"
	const add4 = '+4'
	const mul2 = '*2'
	for (;;) {
		if (res1 > num) {
			return "undefined"
		}else if (res1 == num) {
			return res
		}
		if (res1 * 2 <= num) {
			res1 *= 2
			res += " "+mul2
		}else {
			res1 += 4
			res += " "+add4
		}
	}
}
