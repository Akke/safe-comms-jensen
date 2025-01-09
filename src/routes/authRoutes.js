const express = require("express")
const router = express.Router()
const { createUser } = require("../controllers/userController.js")

router.use("/register", createUser)

module.exports = router
