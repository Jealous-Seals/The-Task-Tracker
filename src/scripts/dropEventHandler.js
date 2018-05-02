//function to handle dropping of tasks
const TaskDatabase = require("./Tasks")
const saveDatabase = require("./databaseSave")
const overdue = require("./overdue")
const archiveCardButton = require("./archiveCardButton")

const handleDrop = (dropArea, draggedElement) => {
    const taskID = draggedElement.draggable.attr("id")
    const card = draggedElement.draggable[0]
    const newStatus = dropArea.target.getAttribute("id")
    const column = dropArea.target
    // overdue(TaskDatabase.tasks.tasks)
    if (newStatus !== "toDo") {
        console.log(TaskDatabase.tasks[taskID].status)
        TaskDatabase.tasks[taskID].status = newStatus
        console.log(TaskDatabase.tasks[taskID].status)
        column.appendChild(card)
        if (newStatus === "done"){
            const button = archiveCardButton(taskID, column)
            card.appendChild(button)
        }
        TaskDatabase.save()
    } else if (newStatus === "toDo") {
        alert("STOP!!!!!")
    }
    TaskDatabase.save()
}

module.exports = handleDrop