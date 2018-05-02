const TaskDatabase = require("./Tasks")
const saveDatabase = require("./databaseSave")

const archiveCardButton = (task) => {
	const button = document.createElement("button")
	button.id = `${task}--button`
	button.setAttribute("type", "submit")
	button.classList = "hidden--button"
	button.textContent = "Archive Task"
	button.addEventListener("click", () => {
		TaskDatabase.tasks[task].archived = true;
		TaskDatabase.save()
		const cardToDelete = document.querySelector(`#${task}`)
		cardToDelete.removeChild(cardToDelete)
	})
	return button
}

module.exports = archiveCardButton