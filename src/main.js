const express = require("express")
require("dotenv").config()

const { connectDb } = require("./config/db")

connectDb()

const app = express()

const PORT = process.env.APP_PORT

app.listen(PORT, () => {
	console.log(`App running and listening on port ${PORT}`)
})
