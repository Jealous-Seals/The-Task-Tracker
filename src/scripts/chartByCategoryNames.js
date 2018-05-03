const TaskDatabase = require("./Tasks")
const categories = require("./categories")

const chartByCategoryNames = () => {
    categories.loadCategories()
    TaskDatabase.load()
    let categoryData = {}
    for (let option in categories.categoryOptions) {
        console.log(categoryData[categories.categoryOptions[option]])
        categoryData[categories.categoryOptions[option]] = 0
    }
    categoryData.Category = 0

    for (let task in TaskDatabase.tasks) {
        if (TaskDatabase.tasks[task].category === "Category") {
            categoryData.Uncategorized += 1
        } else {
            categoryData[TaskDatabase.tasks[task].category] += 1
        }
    }
    const categoryNameArr = Object.keys(categoryData)

    //need to manually replace the word "Category" with "Uncategorized" for the chart labels
    const uncategorizedCategory = categoryNameArr.indexOf("Category")
    if (uncategorizedCategory !== -1) {
        categoryNameArr[uncategorizedCategory] = "Uncategorized"
    }
    return categoryNameArr
}

module.exports = chartByCategoryNames