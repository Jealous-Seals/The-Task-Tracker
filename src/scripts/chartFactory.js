const chartFactory = (id) => {
    const chart = document.createElement("canvas")
    chart.setAttribute("width", "400")
    chart.setAttribute("height", "400")
    chart.setAttribute("id", id)
    return chart
}

module.exports = chartFactory