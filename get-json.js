async function getJSON(path, params) {

    let url = Validurl(path, params)
    
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    const json = await res.json()
    if (json.error) {
        throw new Error(json.error)
    }
    console.log(json);
    
    return json.data

}

function Validurl(url, q) {
    let count = 0
    let keys = Object.keys(q)
    let temp = ""
    if (q == undefined) return url
    url += "?"
    for (let key in q) {
        url += String(key) + "="
        if (String(q[key]).includes(" ")) {
            temp = String(q[key]).replaceAll(" ", "+")
            url += temp
        } else {
            url += q[key]
        }
        if (count < keys.length - 1) {
            url += "&"
            count++
        }
    }
    return url
}