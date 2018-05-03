const chartsPageCreate = require("./chartsPageCreate")
const createTaskPage = require("./taskPage")
const loadTaskPage = require("./taskPageLoad")


const goToCharts = () => {
    const chartsButton = document.getElementById("chartView")
    chartsButton.addEventListener("click", function(event){
        const chartsDiv = document.getElementsByClassName("charts")
        if (chartsButton.id === "chartView") {
            for (let i = 0; i < chartsDiv.length; i++) {
                chartsDiv[i].classList.toggle("hidden")
            }
            chartsButton.id = "taskView"
            chartsButton.textContent = "Hide Charts"
        } else {
            for (let i = 0; i < chartsDiv.length; i++) {
                chartsDiv[i].classList.toggle("hidden")
            }
            chartsButton.id = "chartView"
            chartsButton.textContent = "View Charts"
        }
    })
}

module.exports = goToCharts