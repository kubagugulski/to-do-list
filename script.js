let toDoInput, errorInfo, addBtn, ulList, newTask

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addTask)
}



const addTask = () => {
    if (toDoInput.value !== '') {
        newTask = document.createElement('li')
        newTask.textContent = toDoInput.value
        ulList.append(newTask)
        
        toDoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}



document.addEventListener('DOMContentLoaded', main)