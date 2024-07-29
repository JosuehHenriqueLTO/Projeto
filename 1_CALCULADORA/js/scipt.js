const multiplicationForm = document.querySelector("#multiplicationForm")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplicationOperations")

const createTable = (number, multiplicationNumber) => {
    multiplicationTable.innerHTML = ""
}

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return

})
