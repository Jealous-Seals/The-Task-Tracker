const Tasks = require("./Tasks")
const categories = require("./categories")

const chartByCategoryData = () => {
    categories.loadCategories()
    let categoryData = {}
    for (let option in categories.categoryOptions) {
        categoryData[categories.categoryOptions[option]] = 0
    }

    // for (let task in Tasks){
    //     for (let categoryName in categoryData) {
    //         if (Tasks[task])
    //     }
    // }
    // for (let property in categoryData) {
    //         console.log(`Key is: ${Object.getOwnPropertyNames(categoryData)}, value is: ${categoryData[property]}`)
    // }
    console.log(categoryData)
    return categoryData
}

module.exports = chartByCategoryData