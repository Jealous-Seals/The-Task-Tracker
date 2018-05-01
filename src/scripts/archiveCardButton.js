const Tasks = require("./Tasks")

const archiveCardButton = (task, parent) => {
	const button = document.createElement("button")
	button.setAttribute("type", "submit")
	button.textContent = "Archive Task"
	button.addEventListener("click", () => {
		Tasks[task].archived = true;
		console.log(task)
		const cardToDelete = document.querySelector(`#${task}`)
		parent.removeChild(cardToDelete)
	})
	return button
}

module.exports = archiveCardButton