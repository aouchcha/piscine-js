function round(num) {
    let temp = num
    let cont = 0
    let isNegative = false
    if (num < 0) {
        temp *= -1
        isNegative = true
    }
    while (temp > 1) {
        temp -= 1
        cont++
    }
    temp = temp*10
    if (temp >= 5){
        cont++
    }
    if (isNegative) {
        return -cont
    }
    return cont
}


function ceil(num) {
    let isNegative = false
    if (num < 0) {
        num *= -1
        isNegative = true
    }
    let temp = num
    let cont = 0
    while (temp > 1) {
        temp -= 1
        cont++
    }
    temp = temp*10
    if (isNegative) {
        return -cont
    }
    if (temp > 0){
        cont++
    }
    return cont
}

function floor(num) {
    let cont = 0
    let isNegative = false
    if (num < 0) {
        num *= -1
        isNegative = true
    }
    while (num > 1) {
        num -= 1
        cont++
    }
   
    if (isNegative) {
        cont++
        return -cont
    }
    return cont
}
function trunc(num) {
    let cont = 0
    let isNegative = false
    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        cont += 0xfffffffff;
    }
    if (num < 0) {
        num *= -1
        isNegative = true
    }
    while (num > 1) {
        num -= 1
        cont++
    }
   
    if (isNegative) {
        return -cont
    }
    return cont
}
