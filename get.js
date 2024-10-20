function get(src, path) {
	let sli = [] 
	sli = path.split(".")
	for (const x of sli) {
		if (src[x] === undefined) {
			return undefined
		}
		src = src[x]
	}
	return src
}
