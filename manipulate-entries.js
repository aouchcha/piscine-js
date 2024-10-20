
function filterEntries(obj, func) {
    let keys = Object.keys(obj)
    let res = {}
    for(const key of keys) {
        if (func([key, obj[key]])) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapEntries(obj, func) {
    let keys = Object.keys(obj)
    let res = {}
    for(const key of keys) {
        let [newKey, newValue] = func([key, obj[key]])
        res[newKey] = newValue
    }
    return res
}

function reduceEntries(obj, func, init) {
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
function totalCalories(obj){
    return reduceEntries(obj, (ss,[k,v]) => {
            let res = ss + nutritionDB[k].calories * v * 0.01
            return res
    },0)
}

function lowCarbs(obj){
    return filterEntries(obj, ([k,v]) => {
           return nutritionDB[k].carbs * v * 0.01 < 50
    })

}

function cartTotal(cart) {
    return mapEntries(cart, (item) => {
        const res = {}
        for (const [key, value] of Object.entries(nutritionDB[item[0]])) {
            res[key] = Number.parseInt(value * item[1] * 100) / 10000
        }
        return [item[0], res]
    })
}

// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }
// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart, nutritionDB))