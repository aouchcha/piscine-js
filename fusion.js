function fusion(obj1, obj2) {
   const temp = {...obj2}

    for(const key in obj1) {
        if(obj2.hasOwnProperty(key)) {
            const val1 = obj1[key]
            const val2 = obj2[key]
            if (Array.isArray(val1) && Array.isArray(val2)) {
                temp[key] = val1.concat(val2)
            }else if (typeof val1 == "string" && typeof val2 == "string") {
                temp[key] = `${val1} ${val2}`
            }else if ((typeof val1 == "number" && !isNaN(val1)) && (typeof val2 == "number" && !isNaN(val2))) {
                temp[key] = val1 + val2
            }else if (typeof val1 === 'object' && typeof val2 === 'object' && val1 !== null && val2 !== null) {
                temp[key] = fusion(val1, val2)
            } else {
                temp[key] = val2;
            }
        } else {
            temp[key] = obj1[key]
        }
    }
    return temp
}


console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))