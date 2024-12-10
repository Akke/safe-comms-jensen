const mongoose = require("mongoose")
require("dotenv").config()

const connectDb = async() => {
	try {
		await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
		console.log("Connection to MongoDB established successfully.")
	} catch(error) {
		console.log("Could not connect to MongoDB:", error.message)
	}
}

module.exports = { connectDb } 
