const TaskDatabase = require("./Tasks")
const saveDatabase = require("./databaseSave")
const timestamp = require("./timestamp")
const createNewTask = require("./taskFactory")
const createTaskPage = require("./taskPage")
const taskCardFactory = require("./taskCardFactory")
const activateDrag = require("./drag")

const activateTaskForm = () => {

    const submitButton = document.getElementById("btn--newTask")
    submitButton.addEventListener("click", () => {
        const domElement = document.getElementById("toDo")
        const titleInput = document.getElementById("title")
        const title = titleInput.value
        const descriptionInput = document.getElementById("description")
        const description = descriptionInput.value
        const dueDateInput = document.getElementById("dueDate")
        const dueDate = dueDateInput.value
        const categoryInput = document.getElementById("categorySelect")
        const category = categoryInput.value
        const newTask = createNewTask(title, description, dueDate, "toDo", category)
        domElement.appendChild(taskCardFactory(newTask))
        activateDrag()
        console.log(titleInput.value)
        titleInput.value = ""
        descriptionInput.value= ""
        dueDateInput.value = ""
        categoryInput.value = "Category"
    })
    return submitButton
}

module.exports = activateTaskForm