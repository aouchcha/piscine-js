function chunk(arr, size) {
	let res = []
	for (let i=0; i<arr.length; i++){
		if (i+size <= arr.length) {
			res.push( arr.slice(i,i+size))
			i+=  size-1
		}else{
			res.push(arr.slice(i))
		}
		
	}
	return res
}
