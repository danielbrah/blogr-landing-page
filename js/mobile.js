'use strict';
let navSectionMobile = document.getElementById('nav-mobile')
let navMenu = document.querySelector('.nav-menu')
let hamburgerOpen = document.getElementById('hamburger-open')
let hamburgerClose = document.getElementById('hamburger-close')
let container = document.getElementById('container')
let button = document.querySelectorAll('.menu-header')
let submenuOptions = document.querySelectorAll('.submenu-option')
let arrows = document.querySelectorAll('.arrow')
const attribution = document.querySelector('.attribution')

setTimeout(() => {
    document.body.removeChild(attribution)
}, 5350)

window.addEventListener('scroll', (event) =>{
    if (window.scrollY == 0 || window.scrollY < 0)
        navSectionMobile.style.backgroundColor = 'transparent'
    else
        navSectionMobile.style.backgroundColor = 'hsl(353, 100%, 62%)'
})

hamburgerOpen.addEventListener("click", () => 
{
    navMenu.classList.toggle('active')
    hamburgerOpen.classList.toggle('active')
    hamburgerClose.classList.toggle('active')
})

hamburgerClose.addEventListener("click", () => 
{
    navMenu.classList.toggle('active')
    hamburgerOpen.classList.toggle('active')
    hamburgerClose.classList.toggle('active')
})

submenuOptions.forEach(function(div)
{
    div.style.setProperty('--height', `${45 * div.children.length}px`)
})

// Assigns each submenu an event listener
button.forEach(function(btn, btnIndex)
{
    // When a submenu option is clicked on, this will execute.
    btn.addEventListener("click", () => 
    {
        submenuOptions.forEach(function(div, divIndex)
        {
            if (divIndex == btnIndex)
            {
                div.classList.toggle('active')
                arrows[divIndex].classList.toggle('active')
            }
            else
            {
                if (div.classList.contains('active'))
                {
                    div.classList.toggle('active')
                    arrows[divIndex].classList.toggle('active')
                }
            }
        })
    })
})



