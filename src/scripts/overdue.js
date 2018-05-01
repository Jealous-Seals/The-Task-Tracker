//function to check if an task is overdue or not

//import required modules
const Task = require("./Tasks")

const checkIfOverdue = (task) => {
    const dateStarted = Date.parse(task.dateStarted)
    const dateNow = Date.parse(new Date().toString())
    console.log(dateStarted,dateNow)
}

module.exports = checkIfOverdue