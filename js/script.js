'use strict';
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

let button = document.querySelectorAll('[id=menu-header]')
let submenuOptions = document.querySelectorAll('[id=submenu-option]')

submenuOptions.forEach(function(div)
{
    console.log(div)
    div.style.setProperty('--height', `${50 * div.children.length}px`)
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
            }
            else
            {
                if (div.classList.contains('active'))
                {
                    div.classList.toggle('active')
                }
            }
        })
    })
})



