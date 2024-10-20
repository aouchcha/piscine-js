async function series(funcs) {
    let res = []
    for(let func of funcs) {
        res.push(await func())
    }
    return res
}