function debounce(func, delay) {
    let timeout
   return function(text) {
    if (timeout) {
        clearTimeout(timeout)
    }
    
    timeout = setTimeout(function() {
        func(text)
    },delay)
}
}

function opDebounce(func, delay, options = { leading: false}) {
    let timeout
    let canwe = options.leading
    
    return function(text) {
        if (canwe) {
            func(text)
            canwe = false
        }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            canwe = true
        }, delay);
    }
}

function handleInput(text) {
    console.log('Processing:', text);
}

// Create debounced function
const debouncedHandle = opDebounce(handleInput, 300);

// Test it
console.log('Starting test...');
debouncedHandle('a');
debouncedHandle('ap');
debouncedHandle('app');
debouncedHandle('appl');
debouncedHandle('apple');
