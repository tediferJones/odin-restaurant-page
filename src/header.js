import Logo from './pizza-logo.png';

const header = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const logoContainer = document.createElement('div')
    logoContainer.classList.add('logoContainer')

    const myLogo = new Image();
    myLogo.src = Logo
    myLogo.classList.add("logo")
    logoContainer.appendChild(myLogo)

    const title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = `John's Pizzeria`
    logoContainer.appendChild(title)

    header.appendChild(logoContainer)

    const navBar = document.createElement('div')
    navBar.classList.add('navBar')

    const homeTab = document.createElement('button')
    homeTab.classList.add('homeTab')
    homeTab.classList.add('navLinks')
    homeTab.innerHTML = 'HOME'
    navBar.appendChild(homeTab)

    const menuTab = document.createElement('button')
    menuTab.classList.add('menuTab')
    menuTab.classList.add('navLinks')
    menuTab.innerHTML = 'MENU'
    navBar.appendChild(menuTab)

    const contactTab = document.createElement('button')
    contactTab.classList.add('contactTab')
    contactTab.classList.add('navLinks')
    contactTab.innerHTML = 'CONTACT'
    navBar.appendChild(contactTab)

    header.appendChild(navBar)

    document.querySelector('body').prepend(header)
}

export default header;