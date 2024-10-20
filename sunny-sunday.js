function sunnySunday(date) {
    date -= new Date('0001-01-01')
    date /= (1000*3600*24)
    return newDays[Math.floor(date%6)]
}
const newDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log(sunnySunday(new Date('0001-01-01'))) //=== 'Monday')
console.log( sunnySunday(new Date('0001-01-02'))) //=== 'Tuesday')
console.log( sunnySunday(new Date('0001-01-03'))) //=== 'Wednesday')
console.log( sunnySunday(new Date('0001-01-04'))) //=== 'Thursday')
console.log( sunnySunday(new Date('0001-01-05'))) //=== 'Friday')
console.log( sunnySunday(new Date('0001-01-06'))) //=== 'Saturday')
console.log( sunnySunday(new Date('0001-01-07'))) //=== 'Monday')
console.log( sunnySunday(new Date('0001-12-01'))) //=== 'Friday')
console.log( sunnySunday(new Date('1664-08-09'))) //=== 'Saturday')
console.log( sunnySunday(new Date('2020-01-01'))) //=== 'Monday')
console.log( sunnySunday(new Date('2048-12-08'))) //=== 'Thursday')