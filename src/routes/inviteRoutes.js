const express = require("express")
const router = express.Router()
const { inviteUser } = require("../controllers/userController")

router.post("/:userId", inviteUser)

module.exports = router
