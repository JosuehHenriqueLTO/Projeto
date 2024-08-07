const data = [
    {
        min: 0,
        max: 18.4,
        classification: "Menor que 18,5",
        info: "Magreza",
        obesity: "0"
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Entre 18,5 e 24,9",
        info: "Normal",
        obesity: "0"
    },
    {
        min: 25.0,
        max: 29.9,
        classification: "Entre 25,0 e 29,9",
        info: "Sobrepeso",
        obesity: "I"
    },
    {
        min: 30.0,
        max: 39.9,
        classification: "Entre 30,0 e 39,9",
        info: "Obesidade",
        obesity: "II"
    },
    {
        min: 40.0,
        max: 99.9,
        classification: "Maior que 40",
        info: "Obesidade grave",
        obesity: "III"
    }
];

const imcTable = document.querySelector("#imcTable")

const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")
const calcBtn = document.querySelector("#calcBtn")
const clearBtn = document.querySelector("#clearBtn")

const calcContainer = document.querySelector("#calcContainer")
const resultContainer = document.querySelector("#resultContainer")

const imcNumber = document.querySelector("#imcNumber span")
const imcInfo = document.querySelector("#imcInfo span")

const backBtn = document.querySelector("#backBtn")

// 
function createTable(data) {
    data.forEach((item) => {
        const div = document.createElement("div")
        div.classList.add("tableData")

        const classification = document.createElement("p")
        classification.innerText = item.classification

        const info = document.createElement("p")
        info.innerText = item.info

        const obesity = document.createElement("p")
        obesity.innerText = item.obesity

        div.appendChild(classification)
        div.appendChild(info)
        div.appendChild(obesity)

        imcTable.appendChild(div)
    })
}

function clearInputs() {
    heightInput.value = ""
    weightInput.value = ""
    imcNumber.classList = ""
    imcInfo.classList = ""
}

function validDigits(text) {
    return text.replace(/[^0-9,]/g, "")
}

function calcImc(weight, height) {
    const imc = (weight / (height * height)).toFixed(1)

    return imc
}

function showOrHideResults() {
    calcContainer.classList.toggle("hide")
    resultContainer.classList.toggle("hide")
}

// 
createTable(data)

// 
// [heightInput, weightInput].forEach((input) => {
//     input.addEventListener("input", (e) => {
//         const updatedValue = validDigits(e.target.value)
//         e.target.value = updatedValue
//     })
// })

calcBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const weight = +weightInput.value.replace(",",".")
    const height = +heightInput.value.replace(",",".")

    if(!weight || !height) return

    const imc = calcImc(weight, height)
    
    let info
    
    data.forEach((item) => {
        if (imc >= item.min && imc <= item.max) {
            info = item.info
        }
    })

    if (!info) return

    imcNumber.innerText = imc
    imcInfo.innerText = info

    switch(info) {
        case "Magreza":
            imcNumber.classList.add("low")
            imcInfo.classList.add("low")
            break
        case "Normal":
            imcNumber.classList.add("good")
            imcInfo.classList.add("good")
            break
        case "Sobrepeso":
            imcNumber.classList.add("low")
            imcInfo.classList.add("low")
            break
        case "Obesidade":
            imcNumber.classList.add("medium")
            imcInfo.classList.add("medium")
            break
        case "Obesidade grave":
            imcNumber.classList.add("high")
            imcInfo.classList.add("high")
            break
    }

    showOrHideResults()
})

clearBtn.addEventListener("click", (e) => {
    e.preventDefault;

    clearInputs();
})

backBtn.addEventListener("click", () => {
    clearInputs()
    showOrHideResults()
})