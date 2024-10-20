function map(arr, func) {
    let res = []
    for (let i=0; i<arr.length; i++) {
        res.push(func(arr[i], i,arr))
    }
    return res
}

function flatMap(arr, func) {
    let res = []
    let temp = ""
    for (let i=0; i<arr.length; i++) {
        temp = (func(arr[i], i,arr))
        if (Array.isArray(temp)) {
            for( let x of temp) {
                res.push(x)
            }
        }else{
            res.push(temp)
        }
    }
    return res
}