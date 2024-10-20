function filterValues(obj, func) {
    let res = {}
    for(const key in obj) {
        if (func(obj[key])) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapValues(obj, func) {
    let res = {...obj}
    for(const key in res) {
        res[key] = func(res[key])
    }
    return res
}

function reduceValues(obj,func ,init=0) {
    const keys = Object.keys(obj)
    let res = 0
    res = init
    init = 0
    for (let i=0; i<keys.length; i++) {
        res += func(init, obj[keys[i]])

    }
    return res
}