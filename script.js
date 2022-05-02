let toDoInput, errorInfo, addBtn, ulList, newTask, popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addTask)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopUp)
    popupAddBtn.addEventListener('click', changeToDoText)
    toDoInput.addEventListener('keyup', enterCheck)
}



const addTask = () => {
    if (toDoInput.value !== '') {
        newTask = document.createElement('li')
        newTask.textContent = toDoInput.value
        ulList.append(newTask)

        createToolsArea()

        toDoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTask.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times">'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteToDo(e)
    }
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closePopUp = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeToDoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać treść zadania!'
    }
}

const deleteToDo = e => {
    e.target.closest('li').remove()

    const allToDos = document.querySelectorAll('li')

    if (allToDos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

const enterCheck = (e) => {
    if (e.key==='Enter') {
        addTask()
    }   
}

document.addEventListener('DOMContentLoaded', main)