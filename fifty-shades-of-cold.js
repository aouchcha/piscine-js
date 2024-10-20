import { colors } from "./fifty-shades-of-cold.data.js";
let validDivs = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]

export function generateColdShades() {
    for (let i=0; i<colors.length; i++) {
      for (let j = 0; j < validDivs.length; j++) {
        if (colors[i].includes(validDivs[j])) {
            let newDiv = document.createElement("div")
            newDiv.className = colors[i]
            newDiv.textContent = colors[i]
            document.body.appendChild(newDiv)
        }
      }
    }
}

export function generateClasses() {
    let newStyle = document.createElement("style")
    for (let i = 0; i < colors.length; i++) {
        newStyle.innerHTML += `.${colors[i]} { background: ${colors[i]}; }\n` 
        
    }
    document.head.appendChild(newStyle)
}

export function choseShade(color) {
    let hamza = document.querySelectorAll("div")
    for(let i=0; i<hamza.length; i++) {
        hamza[i].className = color
    }
}