const categories = require("./categories")
const newCategory = require("./newCategory")


console.log("initial value of categories: " + categories)
newCategory("boink")
console.log("value of categories after attempting to add 'boink': " + categories)
newCategory("work")
console.log("value of categories after attempting to add 'work', which already exists in the array: " + categories)