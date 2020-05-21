const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String,
        required: true
    }
})
module.exports = Blog = mongoose.model('blog', BlogSchema)