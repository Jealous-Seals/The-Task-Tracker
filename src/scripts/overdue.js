//function to check if an task is overdue or not

//import required modules
const TaskDatabase = require("./Tasks")

const checkIfOverdue = (task) => {
	const dueDate = Date.parse(task.dueDate)
	const dateNow = Date.parse(new Date().toString())
	console.log(dueDate,dateNow)
	if (dateNow - dueDate > 0) {
		task.overdue = true
	} else if (dateNow - dueDate < 0) {
		task.overdue = false
	}
}

module.exports = checkIfOverdue