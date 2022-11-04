const mongoose = require('mongoose')

const DreamSchema = new mongoose.Schema({
    poster: {
        type: String,
        required: [true, "Must be logged in to share a dream"]
    },
    title: {
        type: String,
        required: [true, "A dream post must have a title"]
    },
    content: {
        type: String,
        required: [true, "A dream post must have some content"],
        minlength: [10, "A dream post must be at least 10 characters long"]
    },
    likes: {
        type: Array
    },
    dislikes: {
        type: Array
    },
    comments: {
        type: Array
    }
}, {timestamps: true})

const Dream = mongoose.model('Dream', DreamSchema)
module.exports = Dream