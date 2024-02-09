const sideBar = document.querySelector('.side-bar')
const toggleBtn = document.querySelector('.toggle')
const closeBtn = document.querySelector('.close')
const nav = document.querySelector('.nav-bar')

function open () {
  toggleBtn.addEventListener('click', () => {
    sideBar.style.display = 'block'
    toggleBtn.style.display = 'none'
    nav.style.display = 'none'
  })
}
function close () {
  closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none'
    toggleBtn.style = ' float: right; display: block;'
    nav.style.display = 'block'
  })
}

close();
open();