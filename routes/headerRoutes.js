const {getHeader, getHeaders, addHeader, putHeader, deleteHeader} = require('../actions/headerActions')

module.exports = (app) => {
    app.get('/api/headers', (req, res) => {
        getHeaders(req, res)
    })

    app.get('/api/headers/:id', (req, res) => {
        getHeader(req, res)
    })

    app.post('/api/headers', (req, res) => {
        addHeader(req, res)
    })

    app.put('/api/headers/:id', async (req, res) => {
        putHeader(req, res)
    })

    app.delete('/api/headers/:id', (req, res) => {
        deleteHeader(req, res)
    })
}