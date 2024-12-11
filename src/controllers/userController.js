const User = require("../models/userModel")

const getUser = async ( req, res ) => {
    const { userId } = req.body

    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found'})
        }
        res.status(200).json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

module.exports = { getUser }
