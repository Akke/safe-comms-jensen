const  Message = require('../models/messageModel')

const getMessages = async (req, res) => {
	try { 
		const messages =await Message.find();
		res.json(messages);
	}  catch (err) {
	res.status(500).json({error :'fel meddelande'});
	}
}

const postMessage = async (req, res) => {
	const { recipientId, senderId, message } = req.body

	try {
		const newMessage = new Message({ recipientId, senderId, message })

		const saveMessage = await newMessage.save()

		res.status(201).json(saveMessage)
	} catch (error) {
		console.log(error)
		res.status(500).send("Server Error")
	} 
}

module.exports = {
	getMessages,
	postMessage
}	
