const mongoose = require("mongoose")

const inviteSchema = {
	sender: { type: mongoose.Schema.Types.ObjectId },
	recipient: { type: mongoose.Schema.Types.ObjectId }
}

module.exports = inviteSchema
