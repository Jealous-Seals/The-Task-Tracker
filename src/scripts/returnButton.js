const TaskDatabase = require("./Tasks")
const saveDatabase = require("./databaseSave")

const returnButtonFunction = (task) => {
	const button = document.createElement("button")
		button.id = `${task}--returnButton`
		button.setAttribute("type", "submit")
		button.classList = "hidden--returnButton"
		button.textContent = "Pull from Archive"
		button.addEventListener("click", () => {
			TaskDatabase.tasks[task].archived = false;
			TaskDatabase.save()
			const cardToDelete = document.querySelector(`#${task}`)
			cardToDelete.parentElement.removeChild(cardToDelete)
	})
	return button
}

module.exports = returnButtonFunction