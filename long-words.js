function longWords(arr) {
    let islong = ele =>typeof ele == "string" && ele.length >= 5
    return arr.every((islong))
}

function oneLongWord(arr) {
    let isVerylong = ele => typeof ele == "string" && ele.length >= 10
    return arr.some(isVerylong)
}

function noLongWords(arr) {
    let isShort = ele => typeof ele == "string" && ele.length < 7
    return arr.every(isShort)
}