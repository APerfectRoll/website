console.log("HELLO")

const panel = document.querySelectorAll('.panel')


panel.forEach(panel => {
    panel.addEventListener('click', () => {
        closePanel()
        panel.classList.add('active')
    })
})


function closePanel() {
    panel.forEach(panel => {
        panel.classList.remove('active')
    })
}