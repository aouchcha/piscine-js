function first(ele){
	if (typeof(ele) == "string" || typeof(ele)=="object"){
		return ele[0]
	}
	return undefined
}

function last(ele){
	if (typeof(ele)=="string" || typeof(ele)=="object"){
		return ele[ele.length-1]
	}
	return undefined
}

function kiss(ele){
	let arr = []
	if (typeof(ele)=="string" || typeof(ele)=="object"){
		arr[0] = ele[ele.length-1]
		arr[1] = ele[0]
		return arr
	}
	return undefined
}
