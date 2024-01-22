const box = document.querySelector("#box")
const h1arr = document.querySelectorAll("h1")
let cursorInterval;

box.classList.add("wide")

setTimeout(() => {
    box.classList.remove("wide")
    h1arr.forEach((h1) => {
        h1.classList.remove('hide')
    })
}, 1000)

document.addEventListener("mousemove", (e) => {
    if(cursorInterval !== undefined) {
        window.clearTimeout(cursorInterval)
    }
    if(!box.style.opacity) {
        box.style.opacity = 1
    }
    box.classList.add("wide")
    box.style.left = `${e.clientX - box.offsetWidth /2}px`
    box.style.top = `${e.clientY - box.offsetWidth / 2}px`
    cursorInterval = setTimeout(function () {
        box.classList.remove("wide")
    }, 100)
})