const Tasks = require("./Tasks")
const saveDatabase = require("./databaseSave")
const timestamp = require("./timestamp")
const createNewTask = require("./taskFactory")
const createTaskPage = require("./taskPage")
const taskCardFactory = require("./taskCardFactory")

const activateTaskForm = () => {

    submitButton = document.getElementById("btn--newTask")
    submitButton.addEventListener("click", () => {
        const domElement = document.getElementById("toDo")
        let title = document.getElementById("title").value
        let description = document.getElementById("description").value
        let dueDate = document.getElementById("dueDate").value
        let category = document.getElementById("dropdown").value
        const newTask = createNewTask(title, description, dueDate, "toDo", category)
        domElement.appendChild(taskCardFactory(newTask))
    })
    return submitButton
}

module.exports = activateTaskForm