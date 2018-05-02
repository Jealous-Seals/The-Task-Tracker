const Tasks = require("./Tasks")

const chartByStatusData = () => {
    let archived = 0
    let toDo = 0
    let doing = 0
    let done = 0
    for (let task in Tasks) {
        if (Tasks[task].archived === true) {
            archived++
        } else {
            switch (Tasks[task].status) {
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