//import required modules
const TaskDatabase = require("./Tasks")
const createNewTask = require("./taskFactory")
const createTaskPage = require("./taskPage")
const createArticlePage = require("./archivePage")
const saveDatabase = require("./databaseSave")
const checkIfOverdue = require("./overdue")
const taskPage = require("./taskPage")
const archivePage = require("./archivePage")
const dragging = require("./drag")
const createTaskModal = require("./newTaskModal")
const categories = require("./categories")
const newCateogry = require("./newCategory")
const categoryDropdown = require("./categoryDropdown")
const activateTaskForm = require("./submitInfo")
const buildOptions = require("./categoryDropdown")
const activateCategoriesForm = require("./createCategoryForm")
const goToArchive = require("./eventHandlers")

TaskDatabase.load()


const domElement = document.getElementById("parentElement")
const taskPageVariable = taskPage()
domElement.appendChild(taskPageVariable)


//test file can be removed from final version
const test = require("./test")
const chartByStatusData = require("./chartByStatusData")
const chartByStatus = require("./chartByStatus")
const chartByCategoryData = require("./chartByCategoryData")


createTaskModal()
activateCategoriesForm()
dragging()
activateTaskForm()
buildOptions()
goToArchive()

chartByCategoryData()