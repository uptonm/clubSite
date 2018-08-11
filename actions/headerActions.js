const mongoose = require('mongoose')
const Header = mongoose.model('headers')

    getHeader = async (req, res) => {
        const exists = await Header.find({ _id: req.params.id })
        if(exists.length !== 0) {
            return res.status(200).send(exists)
        }
        return res.status(400).send('Header Not Found')
    }

    getHeaders = async (req, res) => {
        const exists = await Header.find()
        if(exists.length !== 0) {
            return res.status(200).send(exists)
        }
        return res.status(400).send('No Headers Found')
    }

    addHeader = async (req, res) => {
        const newHeader = await new Header(req.body).save()
        res.status(200).send(newHeader)
    }


    deleteHeader = async (req, res) => {
        const HeaderDelete = await Header.findByIdAndRemove(
            { _id: req.params.id },
            (err, res) => {
                if(err)
                    return res.status(400).send(err)
            }
        )
        return res.status(200).send(`Header ${req.params.id} deleted`)
    }

    putHeader = async (req, res) => {
        const HeaderUpdate = await Header.findByIdAndUpdate(
            { _id: req.params.id }, 
            req.body, 
            (err, res) => {
                if(err) 
                    return res.status(400).send(err)
            })
        return res.status(200).send(HeaderUpdate)
    }

module.exports = {getHeader, getHeaders, addHeader, deleteHeader, putHeader}