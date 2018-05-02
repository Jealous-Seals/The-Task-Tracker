const categories = Object.create({}, {
    categoryOptions: {
        value: ["work", "personal"],
        writable: true,
        enumerable: true
    },
    saveCategories: {
        value: function() {
            localStorage.setItem("categories", JSON.stringify(this.categoryOptions))
        }
    },
    loadCategories: {
        value: function() {
            if (localStorage.getItem("categories") !== null) {
                this.categoryOptions = JSON.parse(localStorage.getItem("categories"))
            }
        }
    }
})


module.exports = categories