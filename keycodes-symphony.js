let Valid = "abcdefghijklmnopqrstuvwxyz"

let start = 0
let x = 0
export function compose() {
    document.addEventListener("keydown", (event) => {
        let char = event.key
        if (Valid.includes(char)) {
            let newDiv = document.createElement("div")
            newDiv.className = "note"
            if (start == colors.length-1) {
                start = 0
            }
            newDiv.style.background = `${colors[start]}`
            start ++
            newDiv.innerHTML = `${char}`
            document.body.appendChild(newDiv)
        }else if (char == "Escape"){
            let notes = document.getElementsByClassName("note")
            for(let i=notes.length-1; i>=0; i--) {
                notes[i].remove()
            }
        }else if (char == "Backspace") {
            let notes = document.getElementsByClassName("note")
            x = notes.length-1
            if (x >= 0) {
                notes[x].remove()
                x--
            }
        }
    });
}

export const colors = [
    'indianred',
    'lightcoral',
    'salmon',
    'darksalmon',
    'lightsalmon',
    'crimson',
    'red',
    'firebrick',
    'darkred',
    'pink',
    'lightpink',
    'hotpink',
    'deeppink',
    'mediumvioletred',
    'palevioletred',
    'orange',
    'coral',
    'tomato',
    'orangered',
    'darkorange',
    'yellow',
    'gold',
    'lightyellow',
    'lemonchiffon',
    'lightgoldenrodyellow',
    'papayawhip',
    'moccasin',
    'peachpuff',
    'palegoldenrod',
    'khaki',
    'darkkhaki',
    'lavender',
    'thistle',
    'plum',
    'violet',
    'orchid',
    'fuchsia',
    'magenta',
    'mediumorchid',
    'mediumpurple',
    'rebeccapurple',
    'blueviolet',
    'darkviolet',
    'darkorchid',
    'darkmagenta',
    'purple',
    'indigo',
    'slateblue',
    'darkslateblue',
    'green',
    'greenyellow',
    'chartreuse',
    'lawngreen',
    'lime',
    'limegreen',
    'palegreen',
    'lightgreen',
    'mediumspringgreen',
    'springgreen',
    'mediumseagreen',
    'seagreen',
    'forestgreen',
    'darkgreen',
    'yellowgreen',
    'olivedrab',
    'olive',
    'darkolivegreen',
    'mediumaquamarine',
    'darkseagreen',
    'lightseagreen',
    'darkcyan',
    'teal',
    'aqua',
    'cyan',
    'lightcyan',
    'paleturquoise',
    'aquamarine',
    'turquoise',
    'mediumturquoise',
    'darkturquoise',
    'cadetblue',
    'steelblue',
    'lightsteelblue',
    'powderblue',
    'lightblue',
    'skyblue',
    'lightskyblue',
    'deepskyblue',
    'dodgerblue',
    'cornflowerblue',
    'mediumslateblue',
    'royalblue',
    'blue',
    'mediumblue',
    'darkblue',
    'navy',
    'midnightblue',
    'brown',
    'cornsilk',
    'blanchedalmond',
    'bisque',
    'navajowhite',
    'wheat',
    'burlywood',
    'tan',
    'rosybrown',
    'sandybrown',
    'goldenrod',
    'darkgoldenrod',
    'peru',
    'chocolate',
    'saddlebrown',
    'sienna',
    'maroon',
    'white',
    'snow',
    'honeydew',
    'mintcream',
    'azure',
    'aliceblue',
    'ghostwhite',
    'whitesmoke',
    'seashell',
    'beige',
    'oldlace',
    'floralwhite',
    'ivory',
    'antiquewhite',
    'linen',
    'lavenderblush',
    'mistyrose',
    'gainsboro',
    'lightgray',
    'silver',
    'darkgray',
    'gray',
    'dimgray',
    'lightslategray',
    'slategray',
    'darkslategray',
    'black',
]

