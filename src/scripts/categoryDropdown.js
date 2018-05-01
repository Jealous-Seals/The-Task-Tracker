/*eslint no-unused-vars: "off" */

const categories = require("./categories")
const componentFactory = require("./componentFactory")


const buildOptions = () => {
	const categorySelect = document.getElementById("categorySelect")
	while (categorySelect.firstChild) {
        categorySelect.removeChild(categorySelect.firstChild)
	}
	const defaultOption = componentFactory("option", "Category", "")
	defaultOption.setAttribute("disabled", "true")
	defaultOption.setAttribute("selected", "true")
	categorySelect.appendChild(defaultOption)
	const categoryOptions = categories
	categoryOptions.forEach(category => {
		const optionElement = componentFactory("option", category, "")
		categorySelect.appendChild(optionElement)
	})
}

module.exports = buildOptions