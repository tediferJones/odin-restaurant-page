import './style.css';
import Header from './header.js';
import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';

Header()
Home()
document.querySelector('.homeTab').classList.add('active')

// should probably make a function to do this, too much repetition
document.querySelector('.homeTab').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = ''

    document.querySelector('.homeTab').classList.add('active')
    document.querySelector('.menuTab').classList.remove('active')
    document.querySelector('.contactTab').classList.remove('active')

    Home()
})

document.querySelector('.menuTab').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = ''

    document.querySelector('.homeTab').classList.remove('active')
    document.querySelector('.menuTab').classList.add('active')
    document.querySelector('.contactTab').classList.remove('active')

    Menu()
})

document.querySelector('.contactTab').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = ''

    document.querySelector('.homeTab').classList.remove('active')
    document.querySelector('.menuTab').classList.remove('active')
    document.querySelector('.contactTab').classList.add('active')

    Contact()
})
