function pyramid(str, num) {
    let res = ""
    let spaces =  num*str.length-str.length
    for (let i=0; i<num; i++) {
        for (let j=0; j<spaces; j++) {
            res += " "
        }
        for (let j=0; j<2*i+1; j++) {
            res += str
        }
        if (i<num-1) {
            res += "\n"
        }
        spaces -= str.length
    }
    return res
}
console.log(pyramid('{}', 12))