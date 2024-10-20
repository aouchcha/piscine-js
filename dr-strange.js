function addWeek(str) {
   const DefaultTime = new Date('0001-01-01')
   let date = (str - DefaultTime)/(1000*60*60*24)
   return ChooseTheNewDay(date%14);
}
function ChooseTheNewDay(nbr) {
    switch (nbr) {
        case 0 :
            return "Monday"
        case 1:
            return "Tuesday"
        case 2:
            return "Wednesday"
        case 3:
            return "Thursday"
        case 4:
            return "Friday"
        case 5:
            return "Saturday"
        case 6:
            return "Sunday"
        case 7:
            return "secondMonday"
        case 8:
            return "secondTuesday"
        case 9:
            return "secondWednesday"
        case 10:
            return "secondThursday"
        case 11:
            return "secondFriday"
        case 12:
            return "secondSaturday"
        case 13:
            return "secondSunday"
    }
}
function timeTravel(obj) {
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)
    return obj.date

}