import Logo from './pizza-logo.png';
import DeliveryIcon from './moped.png';

const header = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const myLogo = new Image();
    myLogo.src = Logo
    myLogo.classList.add("logo")
    header.appendChild(myLogo)

    const title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = `John's Pizzeria`
    header.appendChild(title)

    // add tabs to header, makes it easy for all navigation to appear on every page
    document.querySelector('#content').appendChild(header)



    const body = document.createElement('div')
    body.classList.add('mainContainer')
    
    const intro = document.createElement('div')
    intro.classList.add('intro')
    intro.innerHTML = `Hey I'm walking here! I'm actually crouching in an elevator shaft but anyways, it's me Johnny from John's Pizzeria in Chicago New Yawk, located in Moscow Japan!  Not be confused with Papi John's!  We don't really make great pizza, I would hesitate to call it average, but people keep buying it so we keep making it!  Not sure how we're still in business?  We don't know either, but please come buy some pizza we dont know how much longer we can hold out, please send help.`
    body.appendChild(intro)

    const orderNow = document.createElement('div')
    orderNow.classList.add('orderNow')
    orderNow.innerHTML = 'ORDER NOW!'

    const orderLink = new Image()
    orderLink.src = DeliveryIcon
    orderNow.appendChild(orderLink)

    body.appendChild(orderNow)

    const operatingHours = document.createElement('div')
    operatingHours.classList.add('operatingHours')
    operatingHours.innerHTML = 'OPEN ALL DAY EVERYDAY, INCLUDING HOLIDAYS'
    body.appendChild(operatingHours)    

    document.querySelector('#content').appendChild(body)
}

export default header;