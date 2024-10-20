function deepCopy(any) {
    if (Array.isArray(any)) {
        let copy = []
        for (let ele of any) {
            copy.push(deepCopy(ele))
        }
        return copy
    } else if (typeof any === 'object' && !Array.isArray(any) && !(typeof any === 'function') && any !== null && !(any instanceof RegExp)) {
        let copy = {}
        for (let key in any) {
            copy[key] = deepCopy(any[key])
        }
        return copy
    } else {
        return any
    }
   
}