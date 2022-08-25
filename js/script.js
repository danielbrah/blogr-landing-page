'use strict';
let navSection = document.querySelector('nav')
let navMenu = document.querySelector('.nav-menu')
let hamburgerOpen = document.getElementById('hamburger-open')
let hamburgerClose = document.getElementById('hamburger-close')
let container = document.getElementById('container')
let button = document.querySelectorAll('[id=menu-header]')
let submenuOptions = document.querySelectorAll('[id=submenu-option]')
let arrows = document.querySelectorAll('[id=arrow]')


window.addEventListener('scroll', (event) =>{
    if (window.scrollY == 0 || window.scrollY < 0)
        navSection.style.backgroundColor = 'transparent'
    else
        navSection.style.backgroundColor = 'hsl(13, 93%, 59%)'
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

button.forEach(function(btn, btnIndex)
{
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



