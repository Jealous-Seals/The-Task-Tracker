const saveDatabase = () => {
    const stringifiedDatabase = JSON.stringify(tasks)
    localstorage.setItem('Tasks', stringifiedDatabase)
}

module.exports = saveDatabase