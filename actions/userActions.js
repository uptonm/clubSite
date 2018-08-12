const mongoose = require('mongoose')
const User = mongoose.model('users')

    getUsers = async (req, res) => {
        const exists = await User.find()
        if(exists.length !== 0)
            return res.status(200).send(exists)
        return res.status(400).send('No Users Found')
    }
    
    getUser = async (req, res) => {
        const exists = await User.find({ googleId: req.params.id })
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
            { googleId: req.params.id },
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

module.exports = {getUsers, getUser, addUser, putUser, deleteUser}