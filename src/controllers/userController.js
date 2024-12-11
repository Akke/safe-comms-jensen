const User = require("../models/userModel")
const Invite = require("../models/inviteModel")

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
	inviteUser
}
