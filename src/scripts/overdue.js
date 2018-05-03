//function to check if an task is overdue or not

//import required modules
const TaskDatabase = require("./Tasks")

const checkIfOverdue = (task) => {
	const dueDate = Date.parse(task.dueDate)
	const dateNow = Date.parse(new Date().toString())
	if (dateNow - dueDate > 0) {
		task.overdue = true
		return true
	} else if (dateNow - dueDate < 0) {
		task.overdue = false
		return false
	}
}

module.exports = checkIfOverdue