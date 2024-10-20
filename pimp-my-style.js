import { styles } from './pimp-my-style.data.js'

let start = 0
let finish = styles.length

export function pimp() {
    let butt = document.getElementsByClassName('button')
    if (start < finish) {
       butt[0].classList.add(styles[start])
        if (start == finish-1) {
           butt[0].classList.add("unpimp")
        }
        start++        
   }else {
       butt[0].classList.remove(styles[start-1])
       finish--
       start--
        if (start == 0) {
            butt[0].classList.remove("unpimp")
        }
        if (start == -1) {
            finish = styles.length
            start = 0
        }
    }
}
