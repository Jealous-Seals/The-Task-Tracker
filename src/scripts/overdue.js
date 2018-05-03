//function to check if an task is overdue or not

//import required modules
const TaskDatabase = require("./Tasks")

const checkIfOverdue = (task) => {
	const taskToCheck = TaskDatabase.tasks[task]
	const dueDate = Date.parse(taskToCheck.dueDate)
	const dateNow = Date.parse(new Date().toString())
	console.log(dueDate,dateNow)
	if (dateNow - dueDate > 0) {
		taskToCheck.overdue = true
	} else if (dateNow - dueDate < 0) {
		taskToCheck.overdue = false
	}
}

module.exports = checkIfOverdue