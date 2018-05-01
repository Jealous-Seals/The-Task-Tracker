const Tasks = require("./Tasks")

const archiveCardButton = (task, parent) => {
    button = document.createElement("button")
    button.setAttribute("type", "submit")
    button.textContent = "Archive Task"
    button.addEventListener("click", () => {
        Tasks[task].archived = true;
        parent.lastChild.remove();
})
    return button
}

module.exports = archiveCardButton