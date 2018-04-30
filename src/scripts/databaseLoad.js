const loadDatabase = () => {
    const databaseString = localStorage.getItem('Tasks')
    tasks = JSON.parse(databaseString)
}

module.exports = loadDatabase