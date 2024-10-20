function replica(...tar) {
    let res = {}
    for (let i=0; i<tar.length; i++) {
        let keys = Object.keys(tar[i])
        
        for(let key of keys) {
            if (typeof tar[i][key] === "object" && typeof res[key] === "object" && !Array.isArray(tar[i][key]) && !Array.isArray(res[key])){
                res[key] = {...res[key], ...tar[i][key]}
            }else {
                res[key] = tar[i][key]
            }
        }
    }
    return res
}