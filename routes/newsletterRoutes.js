const {getNewsletters, getNewsletter, addNewsletter, putNewsletter, deleteNewsletter} = require('../actions/NewsletterActions')

module.exports = (app) => {
    app.get('/api/Newsletters', (req, res) => {
        getNewsletters(req, res)
    })

    app.get('/api/Newsletters/:id', (req, res) => {
        getNewsletter(req, res)
    })

    app.post('/api/Newsletters', (req, res) => {
        addNewsletter(req, res)
    })

    app.put('/api/Newsletters/:id', async (req, res) => {
        putNewsletter(req, res)
    })

    app.delete('/api/Newsletters/:id', (req, res) => {
        deleteNewsletter(req, res)
    })
}