export default function parallaxScrollbar() {
    const particles = document.querySelector('#particles')
    const sun = document.querySelector('#sun')
    const logoText = document.querySelector('.logo-text')

    window.addEventListener('scroll', () => {
        const value = window.scrollY

        particles.style.left = `${value * 0.8}px`
        sun.style.top = `${value * 0.85}px`
        logoText.style.marginRight = `${value * 3}px`

        window.scrollY >= 500
            ? sun.setAttribute('src', 'img/moon.png')
            : sun.setAttribute('src', 'img/sun.png')
    })
}
