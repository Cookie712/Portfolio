/* eslint-disable import/extensions */
import parallaxScroll from './parallax-scroll.js'
import validateEmail from './validation.js'

const openMenu = on => {
    if (on) {
        window.scrollTo(0, 0)
        document.querySelector('nav ul').style.display = 'flex'
        document.querySelector('nav').style.backgroundColor = 'var(--violet)'
        document.querySelector('nav').style.position = 'fixed'
        document.body.style.overflow = 'hidden'
    } else {
        document.querySelector('nav ul').style.display = 'none'
        document.querySelector('nav').style.backgroundColor = 'transparent'
        document.querySelector('nav').style.position = 'absolute'
        document.body.style.overflow = 'overlay'
        document.body.style.overflowX = 'hidden'
    }
}

const changeSlide = () => {
    let counter = 1
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true
        counter++
        if (counter > 2) {
            counter = 1
        }
    }, 4000)
}

window.addEventListener('load', () => {
    const modal = document.querySelector('.modal')
    const clouds = document.querySelectorAll('.cloud')
    const closeButton = document.querySelector('.close-button')
    const emailInput = document.querySelector('input[name="email"]')
    const form = document.querySelector('form')
    const hamburgerButton = document.querySelector('#hamburger-menu')
    const links = document.querySelectorAll('.link')
    const cards = document.querySelectorAll('.card')

    parallaxScroll()
    validateEmail(emailInput, form)
    changeSlide()

    hamburgerButton.addEventListener('click', () => {
        document.querySelector('nav').style.backgroundColor !== 'var(--violet)'
            ? openMenu(true)
            : openMenu(false)
    })

    links.forEach(link => {
        link.addEventListener('click', () => openMenu(false))
    })

    clouds.forEach(cloud => {
        cloud.addEventListener('click', () => {
            modal.style.display = 'block'
        })
    })

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped')
        })
    })
})
