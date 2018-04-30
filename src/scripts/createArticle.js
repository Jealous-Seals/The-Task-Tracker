const createArticle = (id, classes) => {
    const article = document.createElement("article")
    article.setAttribute("id", id)
    article.classList = classes
    return article
}

module.exports = createArticle