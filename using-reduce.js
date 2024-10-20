function adder(arr, init) {
    if (isNaN(init)) {
        init = 0
    }
    const res = arr.reduce(function(sum, ele) {return sum+ele},init)
    return res
}


function sumOrMul(arr, init) {
    if (isNaN(init)) {
        init = 0
    }
    let res = arr.reduce(function(res, ele){
        if(ele%2 == 0) {
            res *= ele
        }else {
            res += ele
        }
    return res
    },init)
    return res
}

function funcExec(arr, init) {
    if (isNaN(init)) {
        init = 0
    }
    let res = arr.reduce(function(sum, ele){
        if (typeof ele != "function") {
            return sum
        }
        return ele(sum)
    }, init)
    return res
}

// console.log(adder([1, 2, 3, 4]), 10);