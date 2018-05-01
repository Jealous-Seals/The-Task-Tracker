const Tasks = require("./Tasks")
const taskCardFactory = require("./taskCardFactory")
const archiveCardButton = require("./archiveCardButton")

const filter = (currentStatus, parent) => {
	for (let item in Tasks) {
		const card = taskCardFactory(item)
		if (Tasks[item].status === currentStatus  && Tasks[item].archived === false) {
			if(Tasks[item].status === "done"){
				card.appendChild(archiveCardButton(item, parent))
			}
			parent.appendChild(card)
		} else if(currentStatus === "archive" && Tasks[item].archived === true) {
			parent.appendChild(card)
		}
	}
    for (let item in Tasks) {
        const card = taskCardFactory(item)
        if (Tasks[item].status === currentStatus) {
            parent.appendChild(card)
        }
    }
}

module.exports = filter