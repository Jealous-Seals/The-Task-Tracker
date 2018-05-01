const createArticle = require("./createArticle")
const Tasks = require("./Tasks")
const filter = require("./filter")
const taskCardFactory = require("./taskCardFactory")

const createArchivePage = () => {
    archiveArticle = createArticle("archive", "archive")
    filter("archive", archiveArticle)
    return archiveArticle
}

module.exports = createArchivePage