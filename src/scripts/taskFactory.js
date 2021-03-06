//app to create tasks and add them to the tasks database

const TaskDatabase = require("./Tasks")
const saveDatabase = require("./databaseSave")
const timestamp = require("./timestamp")
const IDCounter = require("./IDObject")
const overdue = require("./overdue")


//factory function to create new tasks when called
const createNewTask = (title, description, dueDate, status, category) => {

	const newTask = Object.create(null, {
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
		},
		"archived": {
			value: false,
			writable: true,
			enumerable: true
		},
		"started": {
			value: "", //to be changed, value will come from timestamp function
			enumerable: true,
			writable: true
		},
		"completed": {
			value: null,
			writable: true,
			enumerable: true
		},
		"overdue": {
			value: false,
			enumerable: true,
			writable: true
		}
	})

	//run overdue check
	overdue(newTask)

    //stores the next unique id in a variable
    IDCounter.loadID()
    let taskUID = "_" + IDCounter.currentID
    IDCounter.currentID++
    IDCounter.saveID()


	//creates a key in the master database object using the unique id as the key name
	TaskDatabase.tasks[taskUID] = newTask
    TaskDatabase.save()
    TaskDatabase.load()
	return taskUID
}

module.exports = createNewTask