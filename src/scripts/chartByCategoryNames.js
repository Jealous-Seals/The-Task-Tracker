const TaskDatabase = require("./Tasks")
const categories = require("./categories")

const chartByCategoryNames = () => {
    categories.loadCategories()
    TaskDatabase.load()
    let categoryData = {}
    //create an object with the properties pulled from the categories array
    for (let option in categories.categoryOptions) {
        categoryData[categories.categoryOptions[option]] = 0
    }
    //create the entry for Uncategorized
    categoryData.Uncategorized = 0

    //count the number of tasks in each category, updating the object
    for (let task in TaskDatabase.tasks) {
        //if the category is "Category", update the new "Uncategorized" property
        if (TaskDatabase.tasks[task].category === "Category") {
            categoryData.Uncategorized += 1
        } else {
            categoryData[TaskDatabase.tasks[task].category] += 1
        }
    }
    const categoryNameArr = Object.keys(categoryData)
    return categoryNameArr
}

module.exports = chartByCategoryNames