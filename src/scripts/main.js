/*eslint no-unused-vars: "off" */
//import required modules
const Tasks = require("./Tasks")
const createNewTask = require("./taskFactory")
const createTaskPage = require("./taskPage")
const createArticlePage = require("./archivePage")
const saveDatabase = require("./databaseSave")
const newCategory = require("./newCategory")


// loadDatabase()
createNewTask("title", "description", "s", "s", "c")
console.log(Tasks)