const {getUsers, getUser, addUser, putUser, deleteUser} = require('../actions').actions

module.exports = (app) => {
    app.get('/api/users', (req, res) => {
        getUsers(req, res)
    })

    app.get('/api/users/:id', (req, res) => {
        getUser(req, res)
    })

    app.post('/api/users', (req, res) => {
        addUser(req, res)
    })

    app.put('/api/users/:id', async (req, res) => {
        putUser(req, res)
    })

    app.delete('/api/users/:id', (req, res) => {
        deleteUser(req, res)
    })
}