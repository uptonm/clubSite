const mongoose = require('mongoose')
const { Schema } = mongoose

const User = new Schema({
    first: String,
    last: String,
    email: String,
    bio: String,
    googleId: String
})

mongoose.model('users', User)
