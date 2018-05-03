const TaskDatabase = require("./Tasks")

const chartByStatusData = () => {
    let archived = 0
    let toDo = 0
    let doing = 0
    let done = 0
    TaskDatabase.load()
    for (let task in TaskDatabase.tasks) {
        if (TaskDatabase.tasks[task].archived === true) {
            archived++
        } else {
            switch (TaskDatabase.tasks[task].status) {
                case "toDo":
                toDo++
                break;
                case "doing":
                doing++
                break;
                case "done":
                done++
                break;
                default:
                break;
            }
        }
    }
    //return array in this order: [0]archived, [1]toDo, [2]doing, [3]done
    return [archived, toDo, doing, done]
}
module.exports = chartByStatusData