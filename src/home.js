
import DeliveryIcon from './moped.png';

const home = () => {
    const mainContainer = document.createElement('div')
    mainContainer.classList.add('mainContainer')
    
    const intro = document.createElement('div')
    intro.classList.add('intro')
    intro.innerHTML = `Hey I'm walkin' here! I'm actually crouching in an elevator shaft but anyways, it's me Johnny from John's Pizzeria in Chicago New Yawk, located in Moscow Japan!  We don't really make great pizza, I would hesitate to call it average, but people keep buying it so we keep making it!  Not sure how we're still in business?  We don't know either, but we know that we need more money!` 
    mainContainer.appendChild(intro)

    const orderNow = document.createElement('div')
    orderNow.classList.add('orderNow')
    orderNow.innerHTML = 'ORDER NOW!'
    orderNow.addEventListener('click', () => {
        console.log('link to food delivery service') 
    })
    orderNow.addEventListener('mouseover', () => {
        orderNow.style.backgroundColor = 'gold' 
    })
    orderNow.addEventListener('mouseout', () => {
        orderNow.style.backgroundColor = 'green'
    })

    const orderLink = new Image()
    orderLink.src = DeliveryIcon
    orderNow.appendChild(orderLink)

    mainContainer.appendChild(orderNow)

    const operatingHours = document.createElement('div')
    operatingHours.classList.add('operatingHours')
    operatingHours.innerHTML = 'Our Hours:'

    const weekdays = document.createElement('div')
    weekdays.innerHTML = 'We\'re open  10AM to 2AM everyday! Including Holidays'
    operatingHours.appendChild(weekdays)

    mainContainer.appendChild(operatingHours)

    document.querySelector('#content').appendChild(mainContainer)
}

export default home;