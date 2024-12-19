const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const schema = require("../schemas/userSchema.js")

const UserSchema = new mongoose.Schema(schema, { timestamps: true})

UserSchema.pre("save", async (next) => {
	if(!this.isModified)
		return next()

	const saltRounds = 10

	this.password = await bcrypt.hash(this.password, saltRounds)

	next()
})

module.exports = mongoose.model("User", UserSchema)
