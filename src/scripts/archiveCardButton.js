const Tasks = require("./Tasks")
const saveDatabase = require("./databaseSave")

const archiveCardButton = (task) => {
	const button = document.createElement("button")
	button.id = `${task}--button`
	button.setAttribute("type", "submit")
	button.classList = "hidden--button"
	button.textContent = "Archive Task"
	button.addEventListener("click", () => {
		Tasks[task].archived = true;
		saveDatabase(Tasks)
		const cardToDelete = document.querySelector(`#${task}`)
		cardToDelete.parentElement.removeChild(cardToDelete)
	})
	return button
}

module.exports = archiveCardButton