const mongoose = require('mongoose')
const { Schema } = mongoose

const Header = new Schema({
    header: String,
    subheader: String,
    message: String
})

mongoose.model('headers', Header)
