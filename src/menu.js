const menu = () => {
    function menuItem(name, priceIncrease=0) {
        let small = 8 + priceIncrease
        let medium = 10 + priceIncrease
        let large = 12 + priceIncrease

        const itemContainer = document.createElement('div')
        itemContainer.classList.add(name.replace(/ /g, ''))
        itemContainer.classList.add('specials')
        const itemName = document.createElement('div')
        itemName.classList.add('itemName')
        itemName.textContent = name
        itemContainer.appendChild(itemName)
        const price = document.createElement('div')
        price.classList.add('price')
        price.textContent = `S | $${small}  M | $${medium}  L | $${large}`
        itemContainer.appendChild(price)
        specialsContainer.appendChild(itemContainer)
    }

    function toppingsItem(name, cost) {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add(name.replace(/ /g, ''))
        itemContainer.classList.add('toppings')
        const itemName = document.createElement('div')
        itemName.classList.add('toppingName')
        itemName.textContent = name
        itemContainer.appendChild(itemName)
        const price = document.createElement('div')
        price.classList.add('toppingPrice')
        price.textContent = `$${cost}`
        itemContainer.appendChild(price)
        toppingsContainer.appendChild(itemContainer)
    }

    const mainContainer = document.createElement('div')
    mainContainer.classList.add('mainContainer')

    const specialsDialog = document.createElement('div')
    specialsDialog.classList.add('specialsDialog')
    specialsDialog.textContent = 'Our Specials'
    mainContainer.appendChild(specialsDialog)

    const specialsContainer = document.createElement('div')
    specialsContainer.classList.add('specialsContainer')
    menuItem('Cheese')
    menuItem('Peperoni', 2)
    menuItem('Buffalo Chicken', 6)
    menuItem('Meat Lovers', 5)
    mainContainer.appendChild(specialsContainer)

    const toppingsDialog = document.createElement('div')
    toppingsDialog.classList.add('toppingsDialog')
    toppingsDialog.textContent = 'Choose Your Own Toppings:'
    mainContainer.appendChild(toppingsDialog)

    const toppingsContainer = document.createElement('div')
    toppingsContainer.classList.add('toppingsContainer')
    toppingsItem('Peperoni', 2)
    toppingsItem('Sausage', 2)
    toppingsItem('Bacon', 2)
    toppingsItem('Green Peppers', 1)
    toppingsItem('Jalapeño', 1)
    toppingsItem('Macaroni', 3)
    mainContainer.appendChild(toppingsContainer)

    document.querySelector('#content').appendChild(mainContainer)
}

export default menu;