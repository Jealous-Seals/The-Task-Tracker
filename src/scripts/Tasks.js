const loadDatabase = () => {
	if (localStorage.getItem("Tasks") !== null) {
		console.log("found data in local storage")
		const databaseString = localStorage.getItem("Tasks")
		return JSON.parse(databaseString)
	} else {
		return {}
	}

}

const Tasks = loadDatabase()

module.exports = Tasks