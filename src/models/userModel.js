const mongoose = require("mongoose")

const schema = require("../schemas/userSchema.js")

const UserSchema = new mongoose.Schema(schema, { timestamps: true})

module.exports = mongoose.model("User", UserSchema)
