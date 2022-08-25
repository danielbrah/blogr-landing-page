'use strict';
let navMenu = document.querySelector('.nav-menu')
let hamburgerOpen = document.getElementById('hamburger-open')
let hamburgerClose = document.getElementById('hamburger-close')
let container = document.getElementById('container')
let button = document.querySelectorAll('[id=menu-header]')
let submenuOptions = document.querySelectorAll('[id=submenu-option]')
let arrows = document.querySelectorAll('[id=arrow]')

hamburgerOpen.addEventListener("click", () => 
{
    navMenu.classList.toggle('active')
    hamburgerOpen.classList.toggle('active')
    hamburgerClose.classList.toggle('active')
    document.body.style.overflow = 'hidden'
    container.style.overflow = 'hidden'
})

hamburgerClose.addEventListener("click", () => 
{
    navMenu.classList.toggle('active')
    hamburgerOpen.classList.toggle('active')
    hamburgerClose.classList.toggle('active')
    document.body.removeAttribute('style')
    container.removeAttribute('style')
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



