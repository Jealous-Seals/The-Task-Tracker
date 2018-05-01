//function to check if an task is overdue or not

//import required modules
const Task = require("./Tasks")

const checkIfOverdue = (task) => {
    const dueDate = Date.parse(task.dueDate)
    const dateNow = Date.parse(new Date().toString())
    console.log(dueDate,dateNow)
    if (dateNow - dueDate > 0) {
        console.log("task is overdue")
        task.overdue = true
    } else if (dateNow - dueDate < 0) {
        console.log("task is not overdue")
        task.overdue = false
    }
}

module.exports = checkIfOverdue