function isFriday(date) {
    return (date.getDay() == 5)
}

function isWeekend(date) {
    if ((date.getDay() >= 5 && date.getDay() <= 6) || (date.getDay() == 0)){
        return true
    }
    return false
}

function isLeapYear(date) {
    let year = date.getFullYear()
    console.log(year);
    if ((year%4 == 0 && year%100 != 0 )|| (year%400 == 0) ){
        return true
    }
    return false
}

function isLastDayOfMonth(date) {
    let currentMonth = date.getMonth()
    date.setDate(date.getDate() + 1)
    let newMonth = date.getMonth()
    return !(currentMonth == newMonth)
}
console.log(isFriday(new Date('2014-08-01')));