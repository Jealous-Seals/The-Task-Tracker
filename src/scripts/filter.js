const TaskDatabase = require("./Tasks")
const taskCardFactory = require("./taskCardFactory")
const archiveCardButton = require("./archiveCardButton")

const filter = (currentStatus, parent) => {
	const database = TaskDatabase.tasks
	for (let item in database) {
		const card = taskCardFactory(item)
		if (database[item].status === currentStatus  && database[item].archived === false) {
			if(database[item].status === "done"){
				card.appendChild(archiveCardButton(database[item], parent))
			}
			parent.appendChild(card)
		} else if(currentStatus === "archive" && database[item].archived === true) {
			parent.appendChild(card)
		}
	}
}

module.exports = filter