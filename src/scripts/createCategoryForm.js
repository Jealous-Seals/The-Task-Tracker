//app to handle the button to submit new categories
const createNewCategory = require("./newCategory")
const categories = require("./categories")
const buildOptions = require("./categoryDropdown")

const activateCategoryForm = () => {
    $("#btn--newCategory").click(() => {
        createNewCategory($("#category").val())
        buildOptions()
    })
}

module.exports = activateCategoryForm