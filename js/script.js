let navMenu = document.querySelector('.nav-menu')
let hamburgerOpen = document.getElementById('hamburger-open')
let hamburgerClose = document.getElementById('hamburger-close')

hamburgerOpen.addEventListener("click", () => 
{
    navMenu.classList.toggle('active')
    hamburgerOpen.classList.toggle('active')
    hamburgerClose.classList.toggle('active')
    document.body.style.overflow = 'hidden'
})

hamburgerClose.addEventListener("click", () => 
{
    navMenu.classList.toggle('active')
    hamburgerOpen.classList.toggle('active')
    hamburgerClose.classList.toggle('active')
    document.body.removeAttribute('style')
})



