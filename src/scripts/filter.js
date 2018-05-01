const Tasks = require("./Tasks")
const taskCardFactory = require("./taskCardFactory")

const filter = (currentStatus, parent) => {
    for (let item in Tasks) {
        const card = taskCardFactory(item)
        if (Tasks[item].status === currentStatus) {
            parent.appendChild(card)
        }
    }
}

module.exports = filter