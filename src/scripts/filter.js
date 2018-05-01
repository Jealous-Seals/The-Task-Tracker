const Tasks = require("./Tasks")
const taskCardFactory = require("./taskCardFactory")

const filter = (currentStatus, parent) => {
    console.log(Tasks)
    for (let item in Tasks) {
        const card = taskCardFactory(item)
        console.log(card)
        console.log(parent)
        if (Tasks[item].status === currentStatus) {
            parent.appendChild(card)
            console.log(parent)
        }
    }
}

module.exports = filter