function dayOfTheYear(date) {
    let year = date.getFullYear()
    let time = new Date((year)+"-01-01")
    let temp = date.getTime()
    let temp2 = time.getTime()
    let Days = (temp-temp2)/(1000*3600*24)
    if (Days < 0) {
        return 1
    }
    return Days+1
}