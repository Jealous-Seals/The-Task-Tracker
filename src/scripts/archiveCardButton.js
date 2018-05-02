const Tasks = require("./Tasks")
const saveDatabase = require("./databaseSave")

const archiveCardButton = (task, parent) => {
	const button = document.createElement("button")
	button.setAttribute("type", "submit")
	button.textContent = "Archive Task"
	button.addEventListener("click", () => {
		Tasks[task].archived = true;
		saveDatabase(Tasks)
		console.log(task)
		const cardToDelete = document.querySelector(`#${task}`)
		parent.removeChild(cardToDelete)
		console.log(Tasks)
	})
	return button
}

module.exports = archiveCardButton