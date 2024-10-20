function defaultCurry(obj1) {
    return function(obj2) {
        let res = new Object()
        const keys = Object.keys(obj1)
        for (let key of keys) {
            if (obj2.hasOwnProperty(key)) {
                res[key] = obj2[key]
            }else {
                res[key] = obj1[key]
            }
        }
        const keys2 = Object.keys(obj2)
        for (let key of keys2) {
            if (!res.hasOwnProperty(key)) {
                res[key] = obj2[key]
            }
        }
        return res
    }
}

function mapCurry(func) {
    return function(obj) {
        let res = new Object()
        const keys = Object.keys(obj)
        for (let key of keys) {
            let [newk, newv] = func([key, obj[key]])
            res[newk] = newv
        }
        return res
    }
}

function reduceCurry(func) {
    return function(obj, init) {
        let entries = Object.entries(obj);
        let res;
        let startIndex;
    
        if (init !== undefined) {
            res = init;
            startIndex = 0;
        } else {
            if (entries.length === 0) {
                throw new Error("Reduce of empty object with no initial value");
            }
            res = entries[0];
            startIndex = 1;
        }
    
        for (let i = startIndex; i < entries.length; i++) {
            res = func(res, entries[i]);
        }
        return res;
    }
}

function filterCurry(func) {
    return function(obj) {
        let res = new Object()
        const keys = Object.keys(obj)
        for (let key of keys) {
            if (func([key, obj[key]])) {
                res[key] = obj[key]
            }
        }
        return res
    }
}

function reduceScore(personnel, init) {
    let res = 0
    if (init == undefined) {
        res = 0
    }else {
        res = init
    }
    let keys = Object.keys(personnel)
    for (let key of keys) {
       if(personnel[key].isForceUser){
            res += personnel[key].shootingScore + personnel[key].pilotingScore
       }
    }
    return res
}

function filterForce(personnel) {
    let res = {}
    let keys = Object.keys(personnel)
    for (let key of keys) {
        let temp = {}
        if (personnel[key].shootingScore >= 80 && personnel[key].isForceUser) {
           let keys2 = Object.keys(personnel[key])
           for(let key2 of keys2) {
            temp[key2] = personnel[key][key2]
           }
           res[key] = temp
        }
    }
    return res
}

function mapAverage(personnel) {
    let res = {...personnel}
    let keys = Object.keys(res)
    for (let key of keys) {
        res[key]["averageScore"] = (res[key].pilotingScore + res[key].shootingScore)/2
    }
    return res
}

// console.log(defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
//   })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
//   }))

// const personnel = {
//     lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//     sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//     calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }
// console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel))


// console.log( reduceCurry((acc, [k, v]) => acc.concat(' ', `${k}:${v.id}`))(
//     personnel,
//     'personnel:',
//   ),
// );

// console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
//     arr: [1, 2],
//   }))
//(mapAverage(personnel))