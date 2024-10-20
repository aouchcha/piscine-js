function filterShortStateName(arr) {
    const res = arr.filter((ele) => ele.length < 7)
    return res
}

function filterStartVowel(arr) {
    const res = arr.filter((ele) => StartVow(ele))
    return res
}

function StartVow(str) {
    const temp = str.toLowerCase()
    const Vowels = "aeiou"
    return (Vowels.includes(temp.slice(0,1)))
}

function filter5Vowels(arr) {
    const res = arr.filter((ele) =>fiveVow(ele) >= 5)
    return res
}

function fiveVow(str) {
    str = str.toLowerCase()
    const Vowels = "aeiou"
    let  count = 0
    for (let i=0; i< str.length; i++) {
        if (Vowels.includes(str[i])) {
            count ++
        }
    }
    return count
}

function filter1DistinctVowel(arr) {
    const res = arr.filter((ele) => OneVow(ele))
    return res
}

function OneVow(str) {
    str = str.toLowerCase()
    const Vowels = "aeiou"
    let temp = ""
    for (let i=0; i< str.length; i++) {
        if (Vowels.includes(str[i]) && temp == "") {
            temp = str[i]
        }else if(Vowels.includes(str[i]) && str[i] != temp) {
            return false
        }
    }
    return true
}

function multiFilter(arr) {
    const res = arr.filter((ele) => (ele.capital.length >= 8 && !StartVow(ele.name) && fiveVow(ele.tag) >= 1 && ele.region != "South"))
    return res
}
