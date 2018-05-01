//app to create tasks and add them to the tasks database

const Tasks = require("./Tasks")
const task = require("./taskPrototype")
const saveDatabase = require("./databaseSave")

const idGenerator = function* (startFrom = 0) {
	let newId = 1

	while (true) {
		yield startFrom + newId
		newId++
	}
}

const uuidMaker = idGenerator()


//factory function to create new tasks when called
const createNewTask = (title, description, dueDate, status, category) => {
	const newTask = Object.create(task, {
		"title": {
			value: title,
			enumerable: true
		},
		"description": {
			value: description,
			enumerable: true
		},
		"dueDate": {
			value: dueDate,
			enumerable: true
		},
		"status": {
			value: status,
			enumerable: true
		},
		"category": {
			value: category,
			enumerable: true
		}
	})
	//stores the next unique id in a variable
	let taskUID = uuidMaker.next().value

	//creates a key in the master database object using the unique id as the key name
	Tasks[taskUID] = newTask
	saveDatabase(Tasks)
}

module.exports = createNewTask