const componentFactory = require("./componentFactory")
const Tasks = require("./Tasks")
const archiveCardButton = require("./archiveCardButton")

const taskCardFactory = (taskID) => {
	const taskSection = componentFactory("section", "", "taskCard")
	const title = componentFactory("h3", Tasks[taskID].title, "taskTitle")
	const category = componentFactory("p", Tasks[taskID].category, "taskCategory")
	const description = componentFactory("p", Tasks[taskID].description, "taskDescription")
	const dueDate = componentFactory("p", Tasks[taskID].dueDate, "taskDueDate")
	const archiveButton = archiveCardButton(taskID)

	taskSection.setAttribute("id", taskID)

	taskSection.appendChild(title)
	taskSection.appendChild(category)
	taskSection.appendChild(description)
	taskSection.appendChild(dueDate)
	taskSection.appendChild(archiveButton)


	if (Tasks[taskID].isOverdue === true) {
		const overdue = componentFactory("p", "This task is overdue", "overdue")
		taskSection.appendChild(overdue)
	}

	return taskSection
}

module.exports = taskCardFactory