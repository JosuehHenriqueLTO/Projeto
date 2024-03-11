let products = null
fetch('dishes.json')
    .then(response => response.json())
    .then(data => {
        products = data
        showDetails()
    })

function showDetails() {
    let detail = document.querySelector('.detail')
    let dishList = document.querySelector('.dishList')
    let productId = new URLSearchParams(window.location.search).get('id')
    let thisProduct = products.filter(value => value.id == productId)[0]

    if(!thisProduct) {
        window.location.href = "/"
    }

    detail.querySelector('.image img').src = thisProduct.image
    detail.querySelector('.name').innerText = thisProduct.name
    detail.querySelector('.price').innerText = 'R$' + thisProduct.price
    detail.querySelector('.description').innerText = thisProduct.description
    detail.querySelector
    ;

    (products.filter(value => value.id != productId)).forEach(product => {
        let newProduct = document.createElement('a')
        newProduct.href = '/menudetails.html?id=' + product.id;
        newProduct.classList.add('item')
        newProduct.innerHTML = 
        `
        <img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        `
        dishList.appendChild(newProduct)
    })
}