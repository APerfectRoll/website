const textEl = document.getElementById ('text')
const speedEl = document.getElementById ('speed')
const text = "Bunger"
let index = 1
let speed = 300 / speedEl.value
speedEl.addEventListener('input', (element) => {
    speed = 300 / element.target.value
})

writeText()

function writeText(){
    textEl.innerText = text.slice(0,index)
    index ++

if (index > text.length){
    index = 1
}
    setTimeout(writeText, speed)
}