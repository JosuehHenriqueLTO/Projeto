let dishes = null
fetch('dishes.json')
    .then(response => response.json())
    .then(data => {
        dishes = data
        addDataToHTML()
    })

function addDataToHTML() {
    let dishList = document.querySelector('.dishList')

    if(dishes != null)
    {
        dishes.forEach(dish => {
            let newDish = document.createElement('div')
            newDish.href = '' + dish.id
            newDish.classList.add('item')
            newDish.innerHTML =
            `
            <img src ='${dish.image}' alt='foto do prato'>
            <h2>${dish.name}</h2>
            <div class='price'>R$${dish.price}</div>
            <div class='buttons'>
                <a href=''>adicionar ao pedido</a> 
                <a target='_blank' href='/menudetails.html?id=${dish.id}'>Ver detalhes</a>
            </div>
            `
            dishList.appendChild(newDish)
        })
    }
}





// const favorite = document.querySelector(".fav")
// const pasta = document.querySelector(".pasta")
// const pizza = document.querySelector(".pizza")
// const dessert = document.querySelector(".fav")
// const drink = document.querySelector(".drink")

// const menuList = document.querySelector(".menuList")
// const favoriteMenu = document.querySelector(".favMenu")
// const pastaMenu = document.querySelector(".pastaMenu")
// const pizzaMenu = document.querySelector(".pizzaMenu")
// const dessertMenu = document.querySelector(".dessertMenu")
// const drinkMenu = document.querySelector(".drinkMenu")
