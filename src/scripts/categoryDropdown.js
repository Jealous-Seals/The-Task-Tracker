/*eslint no-unused-vars: "off" */

const categories = require("./categories")
const componentFactory = require("./componentFactory")


const buildOptions = () => {
	const categorySelect = document.getElementById("categorySelect")
	const categoryOptions = categories
	categoryOptions.forEach(category => {
		const optionElement = componentFactory("option", category, "")
		categorySelect.appendChild(optionElement)
	})
}

module.exports = buildOptions