//function to handle dropping of tasks
const Tasks = require("./Tasks")
const saveDatabase = require("./databaseSave")
const overdue = require("./overdue")

const handleDrop = (dropArea, draggedElement) => {
    const task = draggedElement.draggable.attr("id")
    const card = draggedElement.draggable[0]
    const status = dropArea.target.getAttribute("id")
    const column = dropArea.target
    overdue(Tasks[task])
    if (status !== "toDo") {
        Tasks[task].status = status
        column.appendChild(card)
        saveDatabase(Tasks)
    } else if (status === "toDo") {
        alert("STOP!!!!!")
    }
}

module.exports = handleDrop