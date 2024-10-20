function queryServers(serverName, q) {
    let U1  = "/"+serverName+"?q="+q
    let U2 = "/"+serverName+"_backup?q="+q
    return Promise.race ([getJSON(U1),getJSON(U2)])
}

async function gougleSearch(q) {
    let res = {}
    const err = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('timeout'));
        }, 80);
    });

    let U1 =  queryServers("web", q)
    let U2 =  queryServers("image", q)
    let U3 =  queryServers("video", q)
    
    try {
        const temp = await Promise.race([Promise.all([U1,U2, U3]),err])
        
        res["web"] = temp[0]
        res["image"] = temp[1]
        res["video"] = temp[2]
        return res
    } catch (err) {
        throw err
    }
}
