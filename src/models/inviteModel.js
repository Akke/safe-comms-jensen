const mongoose = require("mongoose")

const schema = require("../schemas/inviteSchema")

const InviteSchema = new mongoose.Schema(schema, { timestamps: true })

module.exports = mongoose.model("Invite", InviteSchema)
