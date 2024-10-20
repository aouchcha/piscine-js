function invert(obj) {
    let res = new Object()
    const keys = Object.keys(obj)
    // for (const [key, value] of Object.entries(obj)) {
    //     res[value] = key 
    // }
    for(let key of keys) {
        res[obj[key]] = key
    }
    return res
}