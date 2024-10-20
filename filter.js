function filter(arr, func) {
    let res = []
    for (let i=0; i< arr.length; i++) {
        if (func(arr[i], i , arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function reject(arr, func) {
    let res = []
    for (let i=0; i< arr.length; i++) {
        if (!func(arr[i], i , arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function partition(arr, func) {
    let res = []
    let grp1 = filter(arr, func)
    let grp2 = reject(arr, func)
    res.push(grp1,grp2)
   return res
}