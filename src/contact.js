import SocialIcons from './social-icons.png';

const contact = () => {
    const mainContainer = document.createElement('div')
    mainContainer.classList.add('mainContainer')

    const title = document.createElement('div')
    title.classList.add('contact')
    title.innerHTML = 'Contact Us!'
    mainContainer.appendChild(title)

    const greeting = document.createElement('div')
    greeting.classList.add('greeting')
    greeting.innerHTML = 'Feel free to contact us with any questions or concerns you may have, we strive to bring the highest level of customer service to all of our deeply valued customers.'
    mainContainer.appendChild(greeting)

    const phone = document.createElement('div')
    phone.classList.add('phone')
    phone.innerHTML = 'Phone: 123-456-7890'
    mainContainer.appendChild(phone)

    const email = document.createElement('div')
    email.classList.add('email')
    email.innerHTML = 'Email: john@johnspizzeria.com'
    mainContainer.appendChild(email)

    const socialDialog = document.createElement('div')
    socialDialog.classList.add('socialDialog')
    socialDialog.innerHTML = 'You can also reach out to us on social media!'
    mainContainer.appendChild(socialDialog)

    const socialLinks = new Image()
    socialLinks.classList.add('socialLinks')
    socialLinks.src = SocialIcons
    mainContainer.appendChild(socialLinks)

    document.querySelector('#content').append(mainContainer)
}

export default contact;