var task= document.getElementById("newTask");
task.addEventListener("click", function(event) {
    console.log("1")
})

var category = document.getElementById("newCategory");
category.addEventListener("click", function(event) {
    console.log("2")
})

var archive = document.getElementById("archiveView");
archive.addEventListener("click", function(event) {
    console.log("3")
})
// var task = document.getElementsByClassName("newTask")

// /*
//     JavaScript, in the browser, automatically send the source
//     event to the handler function for the event.
// */
// function handleSectionClick (event) {
//     console.log(event)
// }

// for (var i = 0; i < newTask.length; i++) {
//     task.item(i).addEventListener("click", handleSectionClick)
// }