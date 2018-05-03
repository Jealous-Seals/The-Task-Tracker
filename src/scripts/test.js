const newCategory = require("./newCategory")
const createNewTask = require("./taskFactory")

//Categories: Personal (3), Work (3), Other(2), Uncategorized (2)
//By status: Archived (manual number), toDo (3), doing (4), done (3)

const initialize = () => {
    newCategory("Other")
    createNewTask("Laundry", "Finish the laundry", "2/3/2018", "toDo", "Personal")
    createNewTask("Dishes", "Finish the dishes", "12/3/2018", "toDo", "Personal")
    createNewTask("Pay Bills", "Pay bills", "2/3/2018", "doing", "Personal")
    createNewTask("Next Week's TPS Report", "Ugh still have to talk to Bill", "5/9/2018", "doing", "Work")
    createNewTask("Last Week's TPS Report", "Talked to Bill", "4/25/2018", "done", "Work")
    createNewTask("Plan Office Party", "Sherry wants an ice cream cake", "6/3/2018", "doing", "Work")
    createNewTask("Solve the Gordian Knot without being an asshole", "Cutting it is for quitters.", "1/13/2018", "done", "Other")
    createNewTask("Slay Vampires", "Seemed halloweeny", "10/31/2017", "done", "Other")
    createNewTask("Buy new pants", "Why not?", "5/5/2018", "toDo", "Category")
    createNewTask("Learn to soft shoe", "A necessary life skill", "4/1/2018", "doing", "Category")


}

module.exports = initialize