const mongoose = require('mongoose')

const DreamSchema = new mongoose.Schema({
    poster: {
        type: String,
        required: [true, "Must be logged in to share a dream"]
        // experiment linking this to a user object using ref
        // i.e.
        /* 
            user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
            }
        */
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
    visibility: {
        type: String,
        required: true,
        default: 'Public'
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