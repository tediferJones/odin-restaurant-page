import './style.css';
import Header from './header.js';
import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';

Header()
Home()
document.querySelector('.homeTab').classList.add('active')

// call header first, then use some funtion to dictate current display
// add the event listeners to the header from here so u can easily utilize function with tab switching logic

// could probably make a function to prefer the below, too much repetition

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
