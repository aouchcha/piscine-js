function citiesOnly(arr) {
    let res = []
    arr.map((ele) => res.push(ele.city))
    return res
}

function upperCasingStates(arr) {
    let res = []
    arr.map((ele)=>res.push(Capital(ele)))
    return res
}
function Capital(ss) {
    let temp = ss.split(" ")
    let str = "" 
    for (let j=0; j<temp.length; j++) {
        let temp1 = temp[j].slice(0, 1).toUpperCase()
        let temp2 = temp[j].slice(1)
        str += temp1+temp2
        if (j<temp.length-1) {
            str += " "
        }
    }
    return str
}

function fahrenheitToCelsius(arr) {
    let res = []
    arr.map((ele) =>  res.push(Convert(ele, true)))
    return res
}
function Convert(ss, b) {
    let temp = ss.split("°")
    let num = Number(temp[0])
    ss = Math.floor((num -32)*(5/9))
    if (b) {
        ss += "°C"
    }else {
        ss += "°Celsius"
    }
    return ss
}

function trimTemp(arr) {
    arr.map((ele) => (ele.temperature = DeletSpaces(ele.temperature)))
    return arr
}

function DeletSpaces(ss) {
    let str = ""
    for(let i=0; i<ss.length; i++) {
        if (ss[i] != ' ') {
            str += ss[i]
        }
    }
    return str
}

function tempForecasts(arr) {
    let res = []
    arr.map((ele) => res.push(ReturnToSrting(ele)))
    return res
}

function ReturnToSrting(obj) {
    let str =  ""
    let temp = Convert(obj.temperature, false)
    let city = Capital(obj.city)
    let stat = Capital(obj.state)
    str = temp + " in " + city + ", "+ stat
    return str
}
