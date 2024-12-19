const mongoose =require('mongoose')

const messageSchema = {
	senderId: { type: mongoose.Schema.Types.ObjectId },
	recipientId: { type: mongoose.Schema.Types.ObjectId },
	message: { type: String }
}

module.exports = messageSchema
