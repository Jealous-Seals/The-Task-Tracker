//function to clear everything inside the article tags of the dom
const nukeElement = (element) => {
    const article = document.querySelector(element)
    while (article.firstChild) {
        article.removeChild(article.firstChild)
    }
}

module.exports = nukeElement