function throttle(func, delay) {
    let lastexecute = 0
    return function(text) {
       const time = new Date().getTime()
        if(time-lastexecute >= delay) {
            lastexecute = time
            func(text)
        }
    }
}

function opThrottle(func, delay, options = {leading: false ,trailing: true} ) {
    let check = false
    return function(text) {
        if(check) return

        check = true
        if (options.leading) {
            func(text)
        }

        setTimeout(function() {
            if(options.trailing && !options.leading) {
                func(text)
            }
            check = false
        },delay)
    }
}
