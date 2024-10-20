function id(ele){
	return ele
}

function getLength(ele){
	if (typeof(ele)=="string" || typeof(ele)=="object"){
		return ele.length
	}
	return undefined
}
