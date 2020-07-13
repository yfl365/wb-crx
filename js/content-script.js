setName()
window.addEventListener('visibilitychange', function () {
    var num = 0
    var timer = setInterval(() => {
        num++
        setName()
        if (num >= 100) {
            clearInterval(timer)
        }
    }, 16)
})
function setName() {
    var name = '来去之间'
    var dom = document.querySelector('.gn_nav_list li:last-of-type .S_txt1')
    if (dom) {
        dom.innerHTML = name
    }
    var dom2 = document.querySelector('.name.S_txt1')
    if (dom2) {
        dom2.innerHTML = name
    }
}
