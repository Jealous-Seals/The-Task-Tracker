//import required modules
const Tasks = require("./Tasks")
const createNewTask = require("./taskFactory")
const createTaskPage = require("./taskPage")
const createArticlePage = require("./archivePage")
const saveDatabase = require("./databaseSave")
const checkIfOverdue = require("./overdue")


createNewTask("title", "description", "April 1, 2018", "s", "c")
checkIfOverdue(Tasks._1)
