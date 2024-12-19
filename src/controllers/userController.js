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

const createUser = async (req, res) => {
	const { username, password } = req.body

	try {
		const findUser = await User.findOne({ username: username })
		if(findUser) {
			res.status(409).json({ error: "Username already exists." })
		}

		const newUser = new User({ username, password })

		const saveUser = await newUser.save()

		res.status(201).json(saveUser)
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: "Server Error" })
	}
}

module.exports = {
	getUser,
	inviteUser,
	updateUser,
	createUser
}

