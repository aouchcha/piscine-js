export function build(num) {
    for (let i=1; i<= num; i++) {    
        setTimeout(() => {
            let newDiv = document.createElement("div")
            newDiv.id = "brick-"+i
        if(i%3 == 2) {
            newDiv.dataset.foundation = 'true'
        }
        newDiv.innerHTML = i
        document.body.appendChild(newDiv)
       },i*100)
    }
}

export function repair(...ids) {
   for(let i=0; i<ids.length; i++) {
    let ele = document.getElementById(ids[i])
    if (ele.dataset.foundation === 'true') {
        ele.dataset.repaired = 'in progress'
    } else {
        ele.dataset.repaired = 'true'
    }
   }
}

export function destroy() {
    const allEle = document.querySelectorAll("div")
    allEle[allEle.length-1].remove()
}