const TaskDatabase = require("./Tasks")
const saveDatabase = require("./databaseSave")

const archiveCardButton = (task, parent) => {
	const button = document.createElement("button")
	button.setAttribute("type", "submit")
	button.textContent = "Archive Task"
	button.addEventListener("click", () => {
		TaskDatabase.tasks[task].archived = true;
		TaskDatabase.save()
		const cardToDelete = document.querySelector(`#${task}`)
		parent.removeChild(cardToDelete)
	})
	return button
}

module.exports = archiveCardButton