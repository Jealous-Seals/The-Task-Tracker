let Tasks = {}

const saveDatabase = () => {
	const stringifiedDatabase = JSON.stringify(Tasks)
	localStorage.setItem("Tasks", stringifiedDatabase)
}

module.exports = saveDatabase