//function to handle dropping of tasks
const TaskDatabase = require("./Tasks")
const saveDatabase = require("./databaseSave")
const overdue = require("./overdue")
const timeStamp = require("./timestamp")

const handleDrop = (dropArea, draggedElement) => {
    const time = timeStamp().toString()

    const taskID = draggedElement.draggable.attr("id")
    const card = draggedElement.draggable[0]
    const newStatus = dropArea.target.getAttribute("id")
    const column = dropArea.target
    overdue(TaskDatabase.tasks[taskID])
    if (newStatus !== "toDo" || (newStatus === "toDo" && Date.parse(timeStamp().toString()) - Date.parse(TaskDatabase.tasks[taskID].started) <= 30000)) {
        if (newStatus === "doing" && TaskDatabase.tasks[taskID].status === "toDo"){
            TaskDatabase.tasks[taskID].started === timeStamp().toString()
        }
        console.log(TaskDatabase.tasks[taskID].status)
        TaskDatabase.tasks[taskID].status = newStatus
        console.log(TaskDatabase.tasks[taskID].status)
        column.appendChild(card)
        TaskDatabase.save()
    } else if (newStatus === "toDo" && Date.parse(timeStamp().toString()) - Date.parse(TaskDatabase.tasks[taskID].started) >= 30000) {
        alert("STOP!!!!!")
    }
    TaskDatabase.save()
}

module.exports = handleDrop