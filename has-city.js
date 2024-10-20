function hasCity(country, arr) {
    return function(city) {
        let check = false
        for(let i=0; i<arr.length; i++) {
        if (city == arr[i]) {
            check = true
            return city + " is a city from "+ country
        }
    }
    if (!check) {
        return city + " is not a city from "+ country
    }
   }
}