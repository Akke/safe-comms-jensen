const User = require("../models/userModel")
const Invite = require("../models/inviteModel")

const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users)
	}	catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};

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

<<<<<<< HEAD
const updateUser = async (req, res) => {
    const { userId } = req.params
    const { username } = req.body

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { username },
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).send('Server error')
    }
}

module.exports = {
    getUser,
    inviteUser,
    updateUser
=======
module.exports = {
 	getUser,
	inviteUser
>>>>>>> d115c0c0930153ce0216ef7b3b605271f76319d7
}

