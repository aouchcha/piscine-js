function matchCron(str, date) {
    let sli = str.split(" ")
    if (sli.length != 5) {
        return false
    }
    for (let i=0; i<sli.length;i++) {
        if (sli[i] == "*") {
            continue
        }else {
            if (!Check(i, sli[i], date)) {
                return false
            }
        }
    }
    return true
}

function Check(index, value, Tocompare) {
    switch (index) {
        case 0:
            return (value == Tocompare.getMinutes())
        case 1:
            return (value == Tocompare.getHours())
        case 2:
            return (value == Tocompare.getDate())
        case 3:
            return (value == Tocompare.getMonth()+1)
        case 4:
            if (value == 7) {
                value = 0
            }
            return (value == Tocompare.getDay())
    }
}