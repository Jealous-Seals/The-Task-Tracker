const loadDatabase = () => {
	if (localStorage.getItem("Tasks") !== null) {
		const databaseString = localStorage.getItem("Tasks")
		return JSON.parse(databaseString)
	} else {
		return {}
	}

}

const Tasks = loadDatabase()

module.exports = Tasks