const mongoose = require('mongoose')
const { user, pass } = require('../config/keys')
mongoose.connect(`mongodb://${user}:${pass}@ds135421.mlab.com:35421/uptonm-sandbox`, {useNewUrlParser: true})
require('../models/user')
const User = mongoose.model('users')

    getUsers = async (req, res) => {
        const exists = await User.find()
        if(exists.length !== 0)
            return res.status(200).send(exists)
        return res.status(400).send('No Users Found')
    }
    
    getUser = async (req, res) => {
        console.log('action creator ran')
        const exists = await User.find({ _id: req.params.id })
        if(exists.length !== 0) {
            return res.status(200).send(exists)
        }
        return res.status(400).send('User Not Found')
    }

    addUser = async (req, res) => {
        const newUser = await new User(req.body).save()
        res.status(200).send(newUser)
    }


    deleteUser = async (req, res) => {
        const userDelete = await User.findByIdAndRemove(
            { _id: req.params.id },
            (err, res) => {
                if(err)
                    return res.status(400).send(err)
            }
        )
        return res.status(200).send(`User ${req.params.id} deleted`)
    }

    putUser = async (req, res) => {
        const userUpdate = await User.findByIdAndUpdate(
            { _id: req.params.id }, 
            req.body, 
            (err, res) => {
                if(err) 
                    return res.status(400).send(err)
            })
        return res.status(200).send(userUpdate)
    }

module.exports.actions = {getUsers, getUser, addUser, putUser, deleteUser}