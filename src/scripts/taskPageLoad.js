//function to load the task page
const TaskDatabase = require("./Tasks")
const taskPage = require("./taskPage")
const dragging = require("./drag")

const loadTaskPage = () => {
    TaskDatabase.load()
    const domElement = document.getElementById("parentElement")
    const taskPageVariable = taskPage()
    domElement.appendChild(taskPageVariable)
    dragging()
}


module.exports = loadTaskPage