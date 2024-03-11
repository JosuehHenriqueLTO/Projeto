var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });

let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');

let listProducts = [
    {
        id: 1,
        name: 'Pneu Moto Maggion Aro 17 Viper',
        price: 198.24,
        quantity: 0,
        image: 'img/maggion17.webp',
        nature: {
            size: '110/90-17 60T TT',
            type: 'tire'
        }
    },
    {
        id: 2,
        name: 'Pneu Moto Rinaldi Aro 18 RW33',
        price: 300.00,
        quantiy: 30,
        image: 'img/rinaldi18.jpg',
        nature: {
            size: '100/100-18 59M TT',
            type: 'tire'
        }
    },
    {
        id: 3,
        name: 'Pneu Pirelli Sport Demon',
        price: 459.00,
        quantiy: 30,
        image: 'img/demon.jpg',
        nature: {
            size: '130/70-17 62S TL',
            type: 'tire'
        }
    },
    {
        id: 4,
        name: 'Retrovisor GS Direito e Esquerdo Pro Tork para Motos Honda',
        price: 79.90,
        quantiy: 30,
        image: 'img/protorkgs.avif',
        nature: {
            size: 'default',
            type: 'rearView'
        }
    },
    {
        id: 5,
        name: 'Retrovisor Esportivo Procton Racing Suzuki',
        price: 379.05,
        quantiy: 30,
        image: 'img/suzukisport.webp',
        nature: {
            size: 'default',
            type: 'rearView'
        }
    },
    {
        id: 6,
        name: 'Farol Pro Tork Universal',
        price: 106.78,
        quantiy: 30,
        image: 'img/protorkuniv.webp',
        nature: {
            size: 'default',
            type: 'light'
        }
    },
    {
        id: 6,
        name: 'Escapamento Pro Tork Modelo Original Titan 1995/99',
        price: 310.50,
        quantiy: 30,
        image: 'img/escapprotork.webp',
        nature: {
            size: 'default',
            type: 'exhaust'
        }
    },
    {
        id: 6,
        name: 'Escapamento Completo Esportivo Off Road Powercore 3',
        price: 390.99,
        quantiy: 30,
        image: 'img/escapoffroad.webp',
        nature: {
            size: 'default',
            type: 'exhaust'
        }
    },
    {
        id: 6,
        name: 'Descarga Escape Escapamento Esportivo Competition Titan 150',
        price: 620.99,
        quantiy: 30,
        image: 'img/escapcompet.jpg',
        nature: {
            size: 'default',
            type: 'exhaust'
        }
    },
    {
        id: 6,
        name: 'Ponteira Escapamento Esportivo XJ6 Wacs XJ 6',
        price: 1340.50,
        quantiy: 30,
        image: 'img/escapxj6.png',
        nature: {
            size: 'default',
            type: 'exhaust'
        }
    },
    {
        id: 6,
        name: 'Farol Completo Cg 125 150 160 Titan',
        price: 350.00,
        quantiy: 30,
        image: 'img/farolcg.jpg',
        nature: {
            size: 'default',
            type: 'light'
        }
    },
    {
        id: 6,
        name: 'Farol Universal Motos Street Fighter',
        price: 128.50,
        quantiy: 30,
        image: 'img/farolsf.jpg',
        nature: {
            size: 'default',
            type: 'light'
        }
    },
    {
        id: 6,
        name: 'Farol Moto Honda Hornet 2008 Ate 2011',
        price: 180.90,
        quantiy: 200,
        image: 'img/farolhornet.webp',
        nature: {
            size: 'default',
            type: 'light'
        }
    },
    {
        id: 6,
        name: 'Retrovisor moto titan 125/150 2014',
        price: 140.30,
        quantiy: 30,
        image: 'img/retrotitan.webp',
        nature: {
            size: 'default',
            type: 'rearView'
        }
    },
    {
        id: 6,
        name: 'Par Espelho Retrovisor Moto Honda Cg Titan Fan 150',
        price: 99.99,
        quantiy: 30,
        image: 'img/retrohonda.webp',
        nature: {
            size: 'default',
            type: 'rearView'
        }
    },

];

let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(e){
        e.preventDefault();
        let valueFilter = e.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }

            // check name
            // if(valueFilter.name.value != ''){
            //     if(!item.name.includes(valueFilter.name.value)){
            //         return false;
            //     }
            // }

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













// const getSearchProducts = (search) => {
//     const products = document.querySelectorAll("product")

//     products.forEach((product) => {
//         let productTitle = product.querySelector("h2").innerText.toLowerCase()

//         const normalizeredSearch = search.toLowerCase()

//         product.style.display = "flex"

//         if(!productTitle.includes(normalizeredSearch)) {
//             product.style.display = "none"
//         }
//     })
// }



// parts.addEventListener("change", (e) => {
//     const partsValue = e.target.value

//     console.log(partsValue)
// })
// prices.addEventListener("change", (e) => {
//     const pricesValue = e.target.value

//     console.log(pricesValue)
// })

// searchInput.addEventListener("keyup", (e) => {
//     const search = e.target.value
    
//     getSearchProducts(search)
// })