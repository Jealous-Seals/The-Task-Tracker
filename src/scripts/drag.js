//app to handle task dragging
const Tasks = require("./Tasks")
const handleDrop = require("./dropEventHandler")

const dragging = () => {
    $(".taskCard").draggable({
        snap: ".column",
        helper: "clone",
    })

    $(".column").droppable({
        drop: handleDrop
    })

}

module.exports = dragging
