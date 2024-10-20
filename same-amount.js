function sameAmount (str, reg1, reg2) {
	let tt1 = reg1.flags.includes("g") ? reg1.flags : reg1.flags+"g"
	let tt2 = reg2.flags.includes("g") ? reg2.flags : reg2.flags+"g"
	let newreg1 = new RegExp(reg1.source, tt1)
	let newreg2 = new RegExp(reg2.source, tt2)

	let temp1 = str.match(newreg1) || []
	let temp2 = str.match(newreg2) || []
	return (temp1.length == temp2.length)
}