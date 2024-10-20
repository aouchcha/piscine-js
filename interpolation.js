function interpolation (obj={}) {
    console.log(obj.start, obj.end);
    
    let check = false
    if (obj.start >= obj.end) {
        check = true
    }
    let delay = obj.duration/obj.step
    let inc = (obj.end - obj.start) / obj.step
    let  [y ,x] = [delay, obj.start]

    let time = setInterval(() => {
        obj.callback([x.toFixed(2),y.toFixed(2)])
        x += inc
        y += delay
        if (!check) {
            if (x.toFixed(2) >= obj.end) {
                clearInterval(time)
            }
        }else {
            if (x.toFixed(2) <= obj.end) {
                clearInterval(time)
            }
        }
       

    },delay)

}

interpolation({  step: 5, start: 6, end: 2, duration: 6, waitTime: 10, callback: (ele) => console.log(ele)})

