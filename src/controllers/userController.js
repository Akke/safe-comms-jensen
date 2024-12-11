const User = require("../models/userModel")
const Invite = require("../models/inviteModel")

const getUser = async ( req, res ) => {
    const { userId } = req.params

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

const inviteUser = async (req, res) => {
	const { userId } = req.params
	const { conversationId } = req.body

	const sender = req.user.id
	
	try {
		const newInvite = new Invite({ senderId: sender, recipientId: userId, conversationId: conversationId })

		const saveInvite = await newInvite.save()

		res.status(201).json(saveInvite)
	} catch (error) {
		console.log(error)
		res.status(500).send("Server Error")
	}	
}

module.exports = {
  getUser,
	inviteUser
}

