const Dream = require('../models/dream.model')

module.exports.getAllDreams = (req, res) => {
    Dream.find()
        .then(allDreams => res.json(allDreams))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.createDream = (req, res) => {
    Dream.create(req.body)
        .then(newDream => res.json(newDream))
        .catch(err => res.status(400).json(err))
}

module.exports.findOneDream = (req, res) => {
    Dream.findOne({_id: req.params.id})
        .then(oneDream = res.json(oneDream))
        .catch(err => res.json(err))
}

module.exports.addComment = (req, res) => {
    Dream.updateOne({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedDream => res.json(updatedDream))
        .catch(err => res.status(400).json(err))
}