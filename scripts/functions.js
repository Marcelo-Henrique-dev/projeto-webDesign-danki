const menuMobile = document.querySelector("nav.menu-mobile")
const btnMobile = document.querySelector("i.btnMobile")

btnMobile.addEventListener("click", ()=>{
    menuMobile.classList.toggle('on')
})