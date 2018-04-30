const Tasks = require("./Tasks")

const loadDatabase = () => {
	const databaseString = localStorage.getItem("Tasks")
	Tasks = JSON.parse(databaseString)
}

module.exports = loadDatabase