async function all(proms) {
    let res = {}
    const keys = Object.keys(proms)
    for(let key of keys) {
        res[key] =  await proms[key]
    }
    return res
}