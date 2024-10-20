function flat(arr, num,res,temp) {
    if (num == 0 || num === undefined) {
        num = 1
    }
    if (res === undefined) {
        res = []
    }
    if (temp == undefined) {
        temp = -num
    }
    for (let i=0; i<arr.length; i++) {
        if (temp == num && i < arr.length) {
            let tt = arr.slice(i)
            res.push(tt)
            return res
        }else if(temp == num) {
            return res
        }
        if (num === 0) {
            res.push(arr[i]);
        } else {
            if (Array.isArray(arr[i])) {
                temp ++
                flat(arr[i], num , res, temp);
            } else {
                res.push(arr[i]);
            }
        }
    }
    return res
}