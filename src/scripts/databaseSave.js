
const saveDatabase = (database) => {
	console.log(database)
	const stringifiedDatabase = JSON.stringify(database)
	console.log(stringifiedDatabase)
	localStorage.setItem("Tasks", stringifiedDatabase)
}

module.exports = saveDatabase