let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');

let listProducts = [
    {
        id: 1,
        name: 'Name product white-black',
        price: 205600,
        quantity: 0,
        image: 'img1.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 2,
        name: 'Name product white-black-grey',
        price: 300000,
        quantiy: 30,
        image: 'img2.jpg',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 3,
        name: 'Name product black',
        price: 200000,
        quantiy: 30,
        image: 'img3.jpg',
        nature: {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 4,
        name: 'Name product blue-black',
        price: 400000,
        quantiy: 30,
        image: 'img4.jpg',
        nature: {
            color: ['black', 'blue'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 5,
        name: 'Name product brown',
        price: 320000,
        quantiy: 30,
        image: 'img5.jpg',
        nature: {
            color: ['brown'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 6,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'img6.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },

];

let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            // check color
            if(valueFilter.color.value != ''){
                if(!item.nature.color.includes(valueFilter.color.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            // check min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })
    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = 'R$' + item.price.toLocaleString();
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    }

// const search = () => {
//     const searchbox = document.getElementById("searchItem").ariaValueMax.toUpperCase()
//     const storeItems = document.getElementById("productList")
//     const product = document.querySelectorAll(".product")
//     const pName = storeItems.getElementsByTagName("h2")

//     for(var i=0; pName.length; i++) {
//         let match = product[i].getElementsByTagName("h2")[0]
//         if(match) {
//             let textValue = match.textContent || match.innerHTML

//             if(textValue.toUpperCase().indexOf(searchbox) > -1) {
//                 product[i].style.display = ""
//             } else {
//                 product[i].style.display = "none"
//             }
//         }
//     }
// }



// let list = document.getElementById("list")
// let filter = document.querySelector(".filter")
// let count = document.querySelector("count")
// let listProducts = [
//     {
//         id: 1,
//         name: "Farol Neblina Led U5",
//         price: 100.00,
//         quantity: 10,
//         image: "",
//         nature: {
//             type: "universal",
//             light: "led",
//             side: "front"
//         }
//     },
//     {
//         id: 2,
//         name: "junto de farol dianteiro de motocicleta CB190R CBF 190R",
//         price: 200.00,
//         quantity: 20,
//         image: "",
//         nature: {
//             type: ["CB 190R", "CBF 190R"],
//             light: "led",
//             side: "front"
//         }
//     },
//     {
//         id: 3,
//         name: "Farol Traseiro Universal Para Motocicleta",
//         price: 300.00,
//         quantity: 30,
//         image: "",
//         nature: {
//             type: "universal",
//             light: "led",
//             side: "back"
//         }
//     },
// ]
// let productFilter = listProducts;
//     showProduct(productFilter);
    
//     filter.addEventListener('submit', function(event){
//         event.preventDefault();
//         let valueFilter = event.target.elements;
//         productFilter = listProducts.filter(item => {
//             // check category
//             if(valueFilter.category.value != ''){
//                 if(item.nature.type != valueFilter.category.value){
//                     return false;
//                 }
//             }
//             // check color
//             if(valueFilter.color.value != ''){
//                 if(!item.nature.color.includes(valueFilter.color.value)){
//                     return false;
//                 }
//             }
//             // check name
//             if(valueFilter.name.value != ''){
//                 if(!item.name.includes(valueFilter.name.value)){
//                     return false;
//                 }
//             }
//             // check min price
//             if(valueFilter.minPrice.value != ''){
//                 if(item.price < valueFilter.minPrice.value){
//                     return false;
//                 }
//             }
//             //  check max price
//             if(valueFilter.maxPrice.value != ''){
//                 if(item.price > valueFilter.maxPrice.value){
//                     return false;
//                 }
//             }
    
    
//             return true;
//         })
//         showProduct(productFilter);
//     })
//     function showProduct(productFilter){
//         count.innerText = productFilter.length;
//         list.innerHTML = '';
//         productFilter.forEach(item => {
//             let newItem = document.createElement('div');
//             newItem.classList.add('item');
    
//             // create image
//             let newImage = new Image();
//             newImage.src = item.image;
//             newItem.appendChild(newImage);
//             // create name product
//             let newTitle = document.createElement('div');
//             newTitle.classList.add('title');
//             newTitle.innerText = item.name;
//             newItem.appendChild(newTitle);
//             // create price
//             let newPrice = document.createElement('div');
//             newPrice.classList.add('price');
//             newPrice.innerText = item.price.toLocaleString() + ' đ';
//             newItem.appendChild(newPrice);
    
//             list.appendChild(newItem);
//         });
//     }