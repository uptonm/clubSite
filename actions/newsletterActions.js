const mongoose = require('mongoose')
const Newsletter = mongoose.model('newsletters')

    getNewsletters = async (req, res) => {
        const exists = await Newsletter.find()
        if(exists.length !== 0) {
            return res.status(200).send(exists)
        }
        return res.status(400).send('No Newsletters found')
    }

    getNewsletter = async (req, res) => {
        const exists = await Newsletter.find({ _id: req.params.id })
        if(exists.length !== 0) {
            return res.status(200).send(exists)
        }
        return res.status(400).send('Newsletter Not Found')
    }

    addNewsletter = async (req, res) => {
        const newNewsletter = await new Newsletter({
            header: (req.body.header) ? req.body.header : '',
            subheader: (req.body.subheader) ? req.body.subheader : '',
            body: (req.body.body) ? req.body.body : '',
            image: (req.body.image) ? req.body.image : '',
            date: new Date().toDateString()
        }).save()
        res.status(200).send(newNewsletter)
    }


    deleteNewsletter = async (req, res) => {
        const NewsletterDelete = await Newsletter.findByIdAndRemove(
            { _id: req.params.id },
            (err, res) => {
                if(err)
                    return res.status(400).send(err)
            }
        )
        return res.status(200).send(`Newsletter ${req.params.id} deleted`)
    }

    putNewsletter = async (req, res) => {
        const NewsletterUpdate = await Newsletter.findByIdAndUpdate(
            { _id: req.params.id }, 
            req.body, 
            (err, res) => {
                if(err) 
                    return res.status(400).send(err)
            })
        return res.status(200).send(NewsletterUpdate)
    }

module.exports = {getNewsletter, getNewsletters, addNewsletter, deleteNewsletter, putNewsletter}