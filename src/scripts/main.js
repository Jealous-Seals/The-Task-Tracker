//import required modules
const Tasks = require("./Tasks")
const createNewTask = require("./taskFactory")
const createTaskPage = require("./taskPage")
const createArticlePage = require("./archivePage")
const saveDatabase = require("./databaseSave")
const checkIfOverdue = require("./overdue")
const taskPage = require("./taskPage")
const archivePage = require("./archivePage")


createNewTask("title", "description", "April 1, 2018", "s", "c")
checkIfOverdue(Tasks._1)


const domElement = document.getElementById("parentElement")
createNewTask("title", "description", "s", "doing", "c")

const taskPageVariable = taskPage()
domElement.appendChild(taskPageVariable)

createNewTask("title", "description", "s", "s", "c")
