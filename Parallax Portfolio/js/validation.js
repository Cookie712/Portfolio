export default function validateEmail(input, form) {
    const validTemplate =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    form.addEventListener('submit', event => {
        if (!input.value.match(validTemplate)) {
            event.preventDefault()

            const warning = document.createElement('p')
            warning.classList.add('alert-warning')
            warning.textContent = 'Please enter a valid email address'

            input.value = ''
            input.style.border = '2px solid red'
            input.placeholder = 'Non-valid email address'
            input.classList.add('contact-warning')

            setTimeout(() => {
                input.classList.remove('contact-warning')
                input.style.border = '2px solid var(--violet)'
                form.removeChild(warning)
            }, 3000)

            if (!form.contains(warning)) {
                form.appendChild(warning)
            }
        }
    })
}
