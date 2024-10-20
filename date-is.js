function isValid(date) {
    if (isNaN(date) || date == "Invalid Date" || date == "") {
        return false
    }
    return true
}

function isAfter(date1, date2){
    if (!isValid(date1) || !isValid(date2)){
        return false
    }
    if (date1-date2 > 0) {
        return true
    }
    return false
}

function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)){
        return false
    }
    return !isAfter(date1, date2)
}

function isFuture(date) {
    if (!isValid(date)){
        return false
    }
    let CurrentDate = Date.now()
    if (CurrentDate - date > 0) {
        return false
    }
    return true
}

function isPast(date) {
    if (!isValid(date)){
        return false
    }
    return !isFuture(date)
}   