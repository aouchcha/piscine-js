is.num=function(val) {
	return (typeof(val) === "number")
}

 is.nan=function(val){
	return (typeof(val) === "number" && isNaN(val))
}

 is.str=function(val){
	return (typeof(val) === "string")
}

 is.bool=function(val) {
	return (typeof(val) === "boolean")
}

 is.undef=function(val) {
	return (typeof(val) === "undefined")
}

 is.def=function(val){
	return (typeof(val) !== "undefined")
}

 is.arr=function(val){
	return (Array.isArray(val)) 
}

 is.obj=function(val){
	return val !== null && typeof val === "object" && !Array.isArray(val);
}

 is.fun=function(val){
	return (typeof(val) === "function")
}

is.truthy = function(val) {
	return (!!val)
}

 is.falsy=function(val) {
	return(!val)
}


