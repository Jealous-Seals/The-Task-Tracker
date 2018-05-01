const categories = require("./categories")


const newCategory = (input) => {
	const canAdd = () {categories.forEach(category => {
		if(category.match(input)) {
			return false
		} else {
			return true
		}
	})
}
if (canAdd) {
	categories.push(input)
}
}

console.log(categories)
newCategory("a new category")
console.log(categories)
newCategory("test")
console.log(categories)