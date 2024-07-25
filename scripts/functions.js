const menuMobile = document.querySelector("nav.menu-mobile")
const btnMobile = document.querySelector("i.btnMobile")

btnMobile.addEventListener("click", ()=>{
    menuMobile.classList.toggle('on')
})

$('.slider-team').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        }
    ]
})

$('.equipe-circles').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }
        }
    ]
})