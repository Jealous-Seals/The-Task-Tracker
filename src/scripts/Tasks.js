const TaskDatabase = Object.create({}, {
	tasks: {
		value: {},
		writable: true,
		enumerable: true
	},
	save: {
		value: function() {
			localStorage.setItem("Tasks", JSON.stringify(this.tasks))
		}
	},
	load: {
		value: function() {
			if (localStorage.getItem("Tasks") !== null) {
				this.tasks = JSON.parse(localStorage.getItem("Tasks"))
            }
		}
	}
})

module.exports = TaskDatabase
