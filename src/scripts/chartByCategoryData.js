const TaskDatabase = require("./Tasks")
const categories = require("./categories")

const chartByCategoryData = () => {
    categories.loadCategories()
    let categoryData = {}
    for (let option in categories.categoryOptions) {
        categoryData[categories.categoryOptions[option]] = 0
    }
    categoryData.Category = 0

    for (let task in TaskDatabase.tasks) {
        if ([TaskDatabase.tasks[task].category] === "Category") {
            categoryData.Uncategorized += 1
        } else {
            categoryData[TaskDatabase.tasks[task].category] += 1
        }
    }
    const categoryDataArr = Object.values(categoryData)

    return categoryDataArr
}



module.exports = chartByCategoryData