// 
const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector("#todoList")
const editForm = document.querySelector("#editForm")
const editInput = document.querySelector("#editInput")
const cancelEditBtn = document.querySelector("#cancelEditBtn")
const searchInput = document.querySelector("#searchInput")
const eraseBtn = document.querySelector("#eraseButton")
const filterBtn = document.querySelector("#filterSelect")

let oldInputValue

// 
const saveTodo = (text, done=0, save=1) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)


    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finishTodo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("editTodo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("removeTodo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)


    if(done) {
        todo.classList.add("done")
    }

    if(save) {
        saveTodoLocalStorage((text, done))
    }

    todoList.appendChild(todo)

    todoInput.value = ""
}

console.log("AAAAAAAAAAAAAAAAAAAAAA")

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (editInputValue) => {
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
}

const getSearchTodos = (search) => {
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase()

        const normalizedSearch = search.toLowerCase()

        todo.style.display = "flex"

        if(!todoTitle.includes(search)) {
            todo.style.display = "none"
        }
    })
}

const filterTodos = (filterValue) => {
    const todos = document.querySelectorAll(".todos")

    switch(filterValue) {
        case "all":
            todos.forEach((todo) => (todo.style.display = "flex"))
            break

        case "done":
            todos.forEach((todo) => todo.classList.contains ("done") ? todo.style.display = "flex" : todo.style.display = "none")
            break

        case "todo":
            !todos.forEach((todo) => todo.classList.contains ("done") ? todo.style.display = "flex" : todo.style.display = "none")
            break

        default:
            break
    }
}

// 
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div")

    let todoTitle

    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerHTML
    }

    if(targetEl.classList.contains("finishTodo")) {
        parentEl.classList.toggle("done")
    }

    if(targetEl.classList.contains("removeTodo")) {
        parentEl.remove()

        removeTodoLocalStorage(todoTitle)
    }

    if(targetEl.classList.contains("editTodo")) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue =  todoTitle
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()

    toggleForms()
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()
})

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value

    getSearchTodos(search)
})

eraseBtn.addEventListener("click", (e) => {
    e.preventDefault()

    searchInput.value = ""

    searchInput.dispatchEvent(new Event("keyup"))
})


filterBtn.addEventListener("change", (e) => {
    const filterBtn = e.target.value
    
    filterTodos(filterValue)
})

// 
const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || []

    return todos
}

const loadTodos = () => {
    const todos = getTodosLocalStorage()

    todos.forEach((todo) => {
        saveTodo(todo.text, todo.done, 0)
    })
}

const saveTodoLocalStorage = (todo) => {
    const todos = getTodosLocalStorage()

    todos.push(todo)

    localStorage.setItem("todos", JSON.stringify(todos))
}

const removeTodoLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage()

    const filteredTodos = todos.filter((todo) => todo.text !== todoText)

    localStorage.setItem("todos", JSON.stringify(filteredTodos))
}

loadTodos()