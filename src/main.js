const express = require("express")
require("dotenv").config()

const { connectDb } = require("./config/db")

const app = express()

const PORT = process.env.APP_PORT || 3001

connectDb()

app.use(express.json())

const userRoutes = require("./routes/userRoutes")
const inviteRoutes = require("./routes/inviteRoutes")
const conversationRoutes = require("./routes/conversationRoutes")
const messagesRoutes = require("./routes/messagesRoutes")
const authRoutes = require("./routes/authRoutes")

app.use("/users", userRoutes)
app.use("/invite", inviteRoutes)
app.use("/conversations", conversationRoutes)
app.use("/messages", messagesRoutes)
app.use("/auth", authRoutes)

app.listen(PORT, () => {
	console.log(`App running and listening on port ${PORT}`)
})
