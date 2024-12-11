const mongoose = require("mongoose")

const inviteSchema = {
	senderId: { type: mongoose.Schema.Types.ObjectId },
	recipientId: { type: mongoose.Schema.Types.ObjectId },
	conversationId: { type: mongoose.Schema.Types.ObjectId }
}

module.exports = inviteSchema
