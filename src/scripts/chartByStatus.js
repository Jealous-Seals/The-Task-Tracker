const Chart = require("chart.js")
const chartByStatusData = require("./chartByStatusData")


const chartHook = document.getElementById("chartByStatus");
const chartByStatus = new Chart(chartHook, {
    type: "bar",
    data: {
        labels: ["Archived", "ToDo", "Doing", "Done"],
        datasets: [{
            label: "Tasks by Status",
            data: chartByStatusData(),
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

module.exports = chartByStatus