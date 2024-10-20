function slice(obj, start, end) {
	if (typeof(end) == "undefined" || end > obj.length){
		end  = obj.length
	}
	if (typeof(start) == "undefined") {
		start = 0
	}
	let checktype = ""
	var res = ""
	if (typeof(obj) == "string"){
		res = "" 
		checktype = "ss"
	}else if (Array.isArray(obj)){
		res = []
		checktype = "rr"
	}
	if (start < 0 || end < 0){
		if (start < 0) {
			start = obj.length + start
		}
		if (end < 0) {
			end = obj.length + end
		}
	}
	if (checktype == "ss") {
		res = str(obj, res, start, end)
	}else if (checktype == "rr") {
		arr(obj, res, start, end)
	}
	return res
}

function str(obj, res, start, end){
	for (let i=start; i<end; i++) {
		res += obj[i]
	}
	return res
}

function arr(obj, res, start, end) {
	for (let i=start; i<end; i++) {
		res.push(obj[i])
	}
}

