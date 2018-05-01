
const saveDatabase = (database) => {
	const stringifiedDatabase = JSON.stringify(database)
	localStorage.setItem("Tasks", stringifiedDatabase)
}

module.exports = saveDatabase