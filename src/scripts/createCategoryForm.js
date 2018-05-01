//app to handle the button to submit new categories
const createNewCategory = require("./newCategory")
const categories = require("./categories")

const activateCategoryForm = () => {
    $("#btn--newCategory").click(() => {
        categories.push($("#category").val())
    })
}

module.exports = activateCategoryForm