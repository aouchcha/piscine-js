function filterKeys(obj, func) {
    let keys = Object.keys(obj)
    let res = {}
    for(const key of keys) {
        if (func(key)) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapKeys(obj, func) {
    let keys = Object.keys(obj)
    let res = {}
    for(const key of keys) {
        let temp = func(key)
        res[temp] = obj[key]
    }
    return res
}
function reduceKeys(obj, func, init) {
    let keys = Object.keys(obj);
    let res
    if(init != undefined) {
        res = init;
    }else {
        res = keys[0]
        keys.shift()
    }

    for (const key of keys) {
        res = func(res, key)
    }
    return res;
}