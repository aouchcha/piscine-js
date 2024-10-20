export function getArchitects() {
    let temp1 = document.querySelectorAll("a")
    let temp2 = document.querySelectorAll(":not(a)")
    return [temp1, temp2]
}

export function getClassical() {
    let temp1 = document.querySelectorAll("a.classical")
    let temp2 =document.querySelectorAll(":not(a.classical)")
    return [temp1, temp2]
}

export function getActive() {
    let temp1 = document.querySelectorAll("a.classical.active")
    let temp2 = document.querySelectorAll("a.classical:not(.active)")
    return [temp1, temp2]
}

export function getBonannoPisano() {
    let temp1 = document.getElementById("BonannoPisano")
    let temp2 = document.querySelectorAll("a.classical.active:not(#BonannoPisano)")
    return [temp1, temp2]
}

