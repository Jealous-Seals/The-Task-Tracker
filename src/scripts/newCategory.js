const categories = require("./categories")

const newCategory = (input) => {
	let canAdd = (categories.categoryOptions.indexOf(input) <= -1);
	if (canAdd === true) {
		categories.categoryOptions.push(input)
		categories.saveCategories()
	}
}

module.exports = newCategory