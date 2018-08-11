const mongoose = require('mongoose')
const { Schema } = mongoose

const Newsletter = new Schema({
    header: String,
    subheader: String,
    body: String,
    image: String,
    date: String
})

mongoose.model('newsletters', Newsletter)