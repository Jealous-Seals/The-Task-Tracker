const categories = require("./categories")

const newCategory = (input) => {
	let canAdd = (categories.indexOf(input) <= -1);
	if (canAdd === true) {
		categories.push(input)
	}
}

module.exports = newCategory