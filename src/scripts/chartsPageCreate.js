const createArticle = require("./createArticle")
const componentFactory = require("./componentFactory")
const chartFactory = require("./chartFactory")


const chartsPageCreate = () => {

    const chartsArticle = createArticle("charts", "charts")

    const chartByStatusDiv = componentFactory("div", "", "charts")
    const chartByStatusCanvas = chartFactory("chartByStatus")
    chartByStatusDiv.appendChild(chartByStatusCanvas)
    chartsArticle.appendChild(chartByStatusDiv)

    const chartByCategoryDiv = componentFactory("div", "", "charts")
    const chartByCategoryCanvas = chartFactory("chartByCategory")
    chartByCategoryDiv.appendChild(chartByCategoryCanvas)
    chartsArticle.appendChild(chartByCategoryDiv)

    return chartsArticle


}

module.exports = chartsPageCreate