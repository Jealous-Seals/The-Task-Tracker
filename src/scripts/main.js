//import required modules
const Tasks = require("./Tasks")
const createNewTask = require("./taskFactory")
const createTaskPage = require("./taskPage")
const createArticlePage = require("./archivePage")
const saveDatabase = require("./databaseSave")
const taskPage = require("./taskPage")
const archivePage = require("./archivePage")

//targeted dom components
const domElement = document.getElementById("parentElement")
// loadDatabase()
createNewTask("title", "description", "s", "doing", "c")
console.log(Tasks)

const taskPageVariable = taskPage()
domElement.appendChild(taskPageVariable)