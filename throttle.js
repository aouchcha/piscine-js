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

function opThrottle(func, delay, options = {trailing: true} ) {
    let lastexecute = 0
    let timeout
    if(options.leading == undefined) {
        options.leading = false
    }
    if(options.trailing == undefined) {
        options.trailing = false
    }
    return function(text) {
        const time = new Date().getTime()
        if(options.leading && !options.trailing) {
            if (time-lastexecute >= delay) {
                lastexecute = time
                func(text)
            }
        }else if (!options.leading && options.trailing) {
           if (timeout ) {
            clearTimeout(timeout)
           }
            timeout = setTimeout(function() {
                func(text)
            },delay)
           
        }else if (options.leading && options.trailing) {
            if (time-lastexecute >= delay) {
                lastexecute = time+delay
                func(text)
            }
            if (timeout ) {
                clearTimeout(timeout)
               }
                timeout = setTimeout(function() {
                    func(text)
                },delay)
        }
    }
}

function handleInput(text) {
    console.log('Processing:', text);
}

// Create debounced function
const debouncedHandle = opThrottle(handleInput, 300);

// Test it
console.log('Starting test...');
debouncedHandle('a');
debouncedHandle('ap');
debouncedHandle('app');
debouncedHandle('appl');
debouncedHandle('apple');