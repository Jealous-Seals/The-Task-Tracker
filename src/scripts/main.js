//import required modules
const Tasks = require("./Tasks")
const createNewTask = require("./taskFactory")
const createTaskPage = require("./taskPage")
const createArticlePage = require("./archivePage")
const saveDatabase = require("./databaseSave")
const checkIfOverdue = require("./overdue")
const taskPage = require("./taskPage")
const archivePage = require("./archivePage")
const dragging = require("./drag")
const createTaskModal = require("./newTaskModal")

const domElement = document.getElementById("parentElement")
const taskPageVariable = taskPage()
domElement.appendChild(taskPageVariable)


// test tasks to be used to initialize test database, run code with these once and then comment out the function calls
// createNewTask("Clean", "clean up house", "April 1, 2018", "toDo", "household")
// createNewTask("laundry", "do laundry", "April 1, 2018", "doing", "household")

createTaskModal()
dragging()

