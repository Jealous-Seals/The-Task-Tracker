const Chart = require("chart.js")
const chartByCategoryNames = require("./chartByCategoryNames")
const chartByCategoryData = require("./chartByCategoryData")


const ctx2 = document.getElementById("chartByCategory")
const chartByCategory = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: chartByCategoryNames(),
        datasets: [{
            label: "Tasks by Category",
            data: chartByCategoryData(),
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

module.exports = chartByCategory