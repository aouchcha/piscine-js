export function generateLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let font = 11
    for (let i=0; i<120; i++) {
        let newDiv = document.createElement("div")
        newDiv.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)]
        newDiv.style.fontSize = `${font}px`
        font++
        if (i < 40) {
            newDiv.style.fontWeight = "300"
        } else if (i < 80) {
            newDiv.style.fontWeight = "400" 
        } else {
            newDiv.style.fontWeight = "600"
        }
        document.body.appendChild(newDiv)
    }
}