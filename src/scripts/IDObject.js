//app to hold incrimenting id counter
const IDCounter = Object.create({}, {
    currentID: {
        value: 1,
        writable: true,
        enumerable: true,
    },
    saveID: {
        value: function() {
            localStorage.setItem("ID", JSON.stringify(this.currentID))
        }
    },
    loadID: {
        value: function() {
            if (localStorage.getItem("Tasks") !== null) {
                this.currentID = JSON.parse(localStorage.getItem("ID"))
            }
        }
    }
})

module.exports = IDCounter