const express = require("express")
require("dotenv").config()

const { connectDb } = require("./config/db")

const app = express()

const PORT = process.env.APP_PORT

connectDb()

app.use(express.json())

const authRoutes = require("./routes/authRoutes")

app.use("/auth", authRoutes)

app.listen(PORT, () => {
	console.log(`App running and listening on port ${PORT}`)
})
