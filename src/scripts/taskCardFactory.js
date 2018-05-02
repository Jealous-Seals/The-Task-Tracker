const componentFactory = require("./componentFactory")
const TaskDatabase = require("./Tasks")


const taskCardFactory = (task) => {
	const taskSection = componentFactory("section", "", "taskCard")
	const title = componentFactory("h3", TaskDatabase.tasks[task].title, "taskTitle")
	const category = componentFactory("p", TaskDatabase.tasks[task].category, "taskCategory")
	const description = componentFactory("p", TaskDatabase.tasks[task].description, "taskDescription")
	const dueDate = componentFactory("p", TaskDatabase.tasks[task].dueDate, "taskDueDate")

	taskSection.setAttribute("id", task)

	taskSection.appendChild(title)
	taskSection.appendChild(category)
	taskSection.appendChild(description)
	taskSection.appendChild(dueDate)

	if (TaskDatabase.tasks[task].isOverdue === true) {
		const overdue = componentFactory("p", "This task is overdue", "overdue")
		taskSection.appendChild(overdue)
	}

	return taskSection
}

module.exports = taskCardFactory