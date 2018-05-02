const createArchivePage = require("./archivePage")
const createTaskPage = require("./taskPage")

const goToArchive = () => {
    var archive = document.getElementById("archiveView");
    archive.addEventListener("click", function(event) {
        const divElement = document.getElementById("parentElement")
        divElement.innerHTML = ""
        if (archive.id === "archiveView") {
            const archivePage = createArchivePage()
            divElement.appendChild(archivePage)
            archive.id = "taskView"
            archive.textContent = "View Task Page"
        } else {
            const taskPage = createTaskPage()
            divElement.appendChild(taskPage)
            archive.textContent = "View the Archive"
            archive.id = "archiveView"
        }
    })
}

module.exports = goToArchive