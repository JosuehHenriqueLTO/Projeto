// 
const spaghetti = document.querySelector('.spaghetti')
const penne = document.querySelector('.penne')
const lasagna = document.querySelector('.lasagna')
const fettuccine = document.querySelector('.fettuccine')
const carbonara = document.querySelector('.carbonara')

const dishesDescription = document.querySelector(".dishesDescription")

const spaghettiDesc = document.querySelector('.spaghettiDesc')
const penneDesc = document.querySelector('.penneDesc')
const lasagnaDesc = document.querySelector('.lasagnaDesc')
const carbonaraDesc = document.querySelector('.carbonaraDesc')
const fettuccineDesc = document.querySelector('.fettuccineDesc')


// FUNCTIONS


// EVENTS
spaghetti.addEventListener("mouseenter", (e) => {
    spaghettiDesc.classList.toggle("hide")
}) 
spaghetti.addEventListener("mouseleave", (e) => {
    spaghettiDesc.classList.toggle("hide")
}) 
    
penne.addEventListener("mouseenter", (e) => {
    penneDesc.classList.toggle("hide")
}) 
penne.addEventListener("mouseleave", (e) => {
    penneDesc.classList.toggle("hide")
}) 
    
lasagna.addEventListener("mouseenter", (e) => {
    lasagnaDesc.classList.toggle("hide")
}) 
lasagna.addEventListener("mouseleave", (e) => {
    lasagnaDesc.classList.toggle("hide")
}) 
    
fettuccine.addEventListener("mouseenter", (e) => {
    fettuccineDesc.classList.toggle("hide")
}) 
fettuccine.addEventListener("mouseleave", (e) => {
    fettuccineDesc.classList.toggle("hide")
}) 
    
carbonara.addEventListener("mouseenter", (e) => {
    carbonaraDesc.classList.toggle("hide")
}) 
carbonara.addEventListener("mouseleave", (e) => {
    carbonaraDesc.classList.toggle("hide")
}) 
    


















































// const awardedDishes = document.querySelector('.awardedDishes')

//  const dishesData = [
//     {
//         dishTitle: "Spaghetti",
//         dishDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor itaque ipsa animi architecto, perferendis magni illo doloremque consequuntur laboriosam eveniet tenetur? In dolorum cumque eaque atque beatae, voluptate nostrum."
//     },
//     {
//         dishTitle: "Penne",
//         dishDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor itaque ipsa animi architecto, perferendis magni illo doloremque consequuntur laboriosam eveniet tenetur? In dolorum cumque eaque atque beatae, voluptate nostrum."
//     },
//     {
//         dishTitle: "Lasagna",
//         dishDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor itaque ipsa animi architecto, perferendis magni illo doloremque consequuntur laboriosam eveniet tenetur? In dolorum cumque eaque atque beatae, voluptate nostrum."
//     },
//     {
//         dishTitle: "Fettuccine",
//         dishDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor itaque ipsa animi architecto, perferendis magni illo doloremque consequuntur laboriosam eveniet tenetur? In dolorum cumque eaque atque beatae, voluptate nostrum."
//     },
//     {
//         dishTitle: "Carbonara",
//         dishDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor itaque ipsa animi architecto, perferendis magni illo doloremque consequuntur laboriosam eveniet tenetur? In dolorum cumque eaque atque beatae, voluptate nostrum."
//     },
// ];

// function createDishesTable() {
//     console.log("Dish info")
//     dishesData.forEach((item) => {
//         const div = document.createElement("div")
//         div.classList.add("tableData")

//         const dishTitle = document.createElement("h3")
//         dishTitle.innerText = item.info

//         const dishDesc = document.createElement("p")
//         dishDesc.innerText = item.obesity

//         div.appendChild(dishTitle)
//         div.appendChild(dishDesc)

//         dishesDescription.appendChild(div)

//         let info

//         dishesData.forEach((item) => {

//         })
//     })
// }

