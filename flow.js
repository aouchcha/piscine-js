function flow(arr) {
    return function(a, ...b) {
        for(let i=0; i<arr.length; i++) {
            a = arr[i](a,...b)
        }
        return a
    }
}