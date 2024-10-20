function pick(obj, arr) {
    let map = objToMap(obj)
    let res = {}
    if (typeof arr == "string") {
        if (map.has(arr)) {
            res[arr] = map.get(arr)
        }
    }else if (Array.isArray(arr)) {
        for(const ele of arr) {
            if (map.has(ele)) {
                res[ele] = map.get(ele)
            }
        }
    }
    return res
}

function objToMap(val) {
	return new Map(Object.entries(val))
}

function omit(obj, arr) {
    let map = objToMap(obj)
    if (typeof arr == "string") {
        if (map.has(arr)) {
            map.delete(arr)
        }
    }else if (Array.isArray(arr)) {
        for(const ele of arr) {
            if (map.has(ele)) {
                map.delete(ele)
            }
        }
    }
    let res = Object.fromEntries(map)
    return res
}