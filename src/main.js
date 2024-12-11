const express = require("express")
require("dotenv").config()

const { connectDb } = require("./config/db")

const app = express()

const PORT = process.env.APP_PORT || 3001

connectDb()

app.use(express.json())

const userRoutes = require("./routes/userRoutes")
const inviteRoutes = require("./routes/inviteRoutes")

app.use("/users", userRoutes)
app.use("/invite", inviteRoutes)

app.listen(PORT, () => {
	console.log(`App running and listening on port ${PORT}`)
})
