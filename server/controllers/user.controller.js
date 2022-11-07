const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const token = jwt.sign({ username: user.username }, process.env.JWT_PRIVATE_KEY, { expiresIn: '1d' })
            return res.json({ user: token })
        })
        .catch(err => res.status(400).json(err))
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.status(400).json({ error: "User not found" })
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password)

    if (!correctPassword) {
        return res.status(400).json({ error: "Invalid password" })
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_PRIVATE_KEY, { expiresIn: '1d' })
    return res.json({ user: token })
}