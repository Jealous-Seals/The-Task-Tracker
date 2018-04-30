//app to hold task prototype object

const Task = Object.create(null, {
    archived: {
        value: false,
        writable: true,
    },
    started: {
        value: new Date(), //to be changed, value will come from timestamp function
        enumerable: true
    },
    completed: {
        value: null,
        writable: true,
        enumerable: true
    },
    overdue: {
        value: function () {
            //function to return true or false based on due date
        }
    }
})

module.exports = Task