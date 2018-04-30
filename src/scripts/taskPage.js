const createArticle = require("./createArticle.js")

const createTaskPage = () => {
    const fragment = document.createDocumentFragment();
    const toDoArticle = createArticle("toDo", "toDo column")
    const doingArticle = createArticle("doing", "doing column")
    const doneArticle = createArticle("done", "done column")

    fragment.appendChild(toDoArticle, doingArticle, doneArticle)

    return fragment
}

module.exports = createTaskPage