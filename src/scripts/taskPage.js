const createArticle = require("./createArticle")
const TaskDatabase = require("./Tasks")
const filter = require("./filter")
const taskCardFactory = require("./taskCardFactory")
const componentFactory = require("./componentFactory")

const createTaskPage = () => {
	const fragment = document.createDocumentFragment();

	const toDoArticle = createArticle("toDo", "toDo column")
	toDoArticle.appendChild(componentFactory("h2", "To Do", ""))
	filter("toDo", toDoArticle)
	fragment.appendChild(toDoArticle)

	const doingArticle = createArticle("doing", "doing column")
	doingArticle.appendChild(componentFactory("h2", "Doing", ""))
	filter("doing", doingArticle)
	fragment.appendChild(doingArticle)

	const doneArticle = createArticle("done", "done column")
	doneArticle.appendChild(componentFactory("h2", "Done", ""))
	filter("done", doneArticle)
	fragment.appendChild(doneArticle)


	return fragment
}

module.exports = createTaskPage