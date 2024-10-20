function retry(count, func) {
    let c = 0
    let lasterr = {}
    return async function(...arg) {
        while (c <= count) {
            try {
                return await func(...arg)
            } catch (err) {
                c++
                lasterr = err
            }
        }
        throw lasterr;
    }      
}

function timeout(delay, func) {
    return async function(...args) {
        const err = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('timeout'));
            }, delay);
        });

        return Promise.race([func(...args),err]);
    }
}


