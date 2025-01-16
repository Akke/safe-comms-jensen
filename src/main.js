const express = require("express")
require("dotenv").config()

const { connectDb } = require("./config/db")

const helmet = require("helmet")

const cookieParser = require("cookie-parser");

const app = express()

const PORT = process.env.APP_PORT || 3000

connectDb()

app.use(express.json())
app.use(cookieParser());
app.use(
	helmet({
		contentSecurityPolicy: {
			useDefaults: true,
			directives: {
				"default-src": ["'self'"],
				"script-src": ["'self'", "http://localhost:3000"],
				"style-src": ["'self'", "'unsafe-inline'"],
				"img-src": ["'self'", "data:", "http://localhost:3000"],
			},
		},
		xContentTypeOptions: true
	})
)

const userRoutes = require("./routes/userRoutes")
const inviteRoutes = require("./routes/inviteRoutes")
const conversationRoutes = require("./routes/conversationRoutes")
const messagesRoutes = require("./routes/messagesRoutes")
const authRoutes = require("./routes/authRoutes")
const envRoutes = require("./routes/envRoutes")

app.use("/users", userRoutes)
app.use("/invite", inviteRoutes)
app.use("/conversations", conversationRoutes)
app.use("/messages", messagesRoutes)
app.use("/auth", authRoutes)
app.use("/env", envRoutes)

app.listen(PORT, () => {
	console.log(`App running and listening on port ${PORT}`)
})
