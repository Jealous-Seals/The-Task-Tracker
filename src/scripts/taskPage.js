const createArticle = require("./createArticle")
const Tasks = require("./Tasks")
const filter = require("./filter")
const taskCardFactory = require("./taskCardFactory")

const createTaskPage = () => {
	const fragment = document.createDocumentFragment();

	const toDoArticle = createArticle("toDo", "toDo column")
	filter("toDo", toDoArticle)
	fragment.appendChild(toDoArticle)

	const doingArticle = createArticle("doing", "doing column")
	filter("doing", doingArticle)
	fragment.appendChild(doingArticle)

	const doneArticle = createArticle("done", "done column")
	filter("done", doneArticle)
	fragment.appendChild(doneArticle)


	return fragment
}

module.exports = createTaskPage