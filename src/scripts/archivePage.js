const createArticle = require("./createArticle.js")

const createArchivePage = () => {
    return createArticle("archive", "archive")
}

module.exports = createArchivePage