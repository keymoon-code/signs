let show_text = document.getElementsByClassName("main-text")
let in_text = document.getElementById("text-box")
let choose_clr = document.getElementsByClassName("clr")
let size = document.getElementsByClassName("sizeno")
function text_change() {
    if (in_text.value == "") {
        show_text[0].textContent = "KeyMOon"
        show_text[1].textContent = "KeyMOon"
        show_text[2].textContent = "KeyMOon"
    }
    else {
        show_text[0].textContent = in_text.value
        show_text[1].textContent = in_text.value
        show_text[2].textContent = in_text.value
    }

}

function sum_arr(arr) {
    let sum = 0
    arr.forEach(element => {
        sum = sum + element
    });
    return sum
}

// default color of show Text
let hist = [4]
show_text[1].style.color = '#02f3ff'
show_text[2].style.color = '#02f3ff'
choose_clr[hist[0]].style.border = "2px solid white"
// default color of show Text


let li = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
function clr(a, color) {
    let sclr = choose_clr[a].style.border
    if (sum_arr(li) == 1) {
        if (hist[0] != a) {
            li[hist[0]] = 0
            choose_clr[hist[0]].style.border = ""
            li[a] = 1
        }
        if (sclr == "") {
            choose_clr[a].style.border = "2px solid white"
            show_text[1].style.color = color
            // show_text[1].style.color = color
            show_text[2].style.color = color
            hist[0] = a
        }
    }
}
// size dictionary

let obj = {
    "small": "3rem",
    "medium": "4rem",
    "large": "5rem"
}
def = 1
// default
//acess css var
let vr = document.querySelector(":root")
let rs = getComputedStyle(vr)
function chnge(sz, bg, clr, fnt) {
    let a 
    switch (sz){
        case 0:
            a = "small"
            break
        case 1:
            a = "medium"
            break
        case 2:
            a = "large"
            break
    }
    vr.style.setProperty('--ani_size',obj[a])
    // show_text[0].style.animation = 'show_anim .5s linear 0s 1 forwards';
    // show_text[1].style.animation = 'show_anim .5s linear 0s 1 forwards';
    show_text[1].classList.add('ani_main-text')
    show_text[2].classList.add('ani_main-text')
    size[sz].style.backgroundColor = bg
    size[sz].style.color = clr
    size[sz].style.fontFamily = fnt
    vr.style.setProperty('--def_size',obj[a])
}
chnge(def, "white", "black", "cursive")
let size_arr = [0, 1, 0]
function chng_size(a) {
    // let cl = size[a].style.backgroundColor
    if (sum_arr(size_arr) == 1) {
        if (def != a) {
            size_arr[def] = 0
            size_arr[a] = 1
            chnge(def, "black", "white", "Moon Dance")
            if(size[a].style.backgroundColor != "white"){
                chnge(a, "white", "black", "cursive")
                def = a
                
            }
        }
    }

}
font_s = document.getElementsByClassName('tstle')
// font_s[a].style.backgroundColor ='black'

o = 0
let font_list = ['Moon Dance','Gruppo','Great Vibes','Handlee','La Belle Aurore','Fuggles','Kavivanar','Grape Nuts']
function text_style(a){
    id = 'tstyle'+a.toString()
    font_s = document.getElementsByClassName('tstle')
    // if(font_s[a].style.backgroundColor =='black'){
    show_text[0].style.fontFamily = font_list[a]
    show_text[1].style.fontFamily = font_list[a]
    show_text[2].style.fontFamily = font_list[a]
    o+=1
    // }
}
// animation-duration: .5s;
// animation-timing-function: linear;
// animation-fill-mode: forwards;
// function elmnt(a){
//     let l = document.getElementsByClassName("tstle")
//     l[a].style.width = "13rem"
//     l[a].style.height = "4rem"
// }







