const htmlAppend = require('./htmlAppend')
const componentFactory = require('./componentFactory')
const Tasks = require('./databaseLoad')


const taskCardFactory = (taskID) => {
	const taskSection = componentFactory('section', '', 'taskCard')
	const title = componentFactory('h3', Tasks[taskID].title, 'taskTitle')
	const category = componentFactory('p', Tasks[taskID].category, 'taskCategory')
	const description = componentFactory('p', Tasks[taskID].description, 'taskDescription')
	const dueDate = componentFactory('p', Tasks[taskID].dueDate, 'taskDueDate')

	htmlAppend(taskSection, title)
	htmlAppend(taskSection, category)
	htmlAppend(taskSection, description)
	htmlAppend(taskSection, dueDate)

	if (Tasks[taskID].isOverdue === true) {
		const overdue = componentFactory('p', 'This task is overdue', 'overdue')
		htmlAppend(taskSection, overdue)
	}


}

module.exports = taskCardFactory