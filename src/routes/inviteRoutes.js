const express = require("express")
const router = express.Router()
const { inviteUser } = require("../controllers/userController")
const { requireAuth } = require("../middleware/authMiddleware")

router.post("/:userId", requireAuth, inviteUser)

module.exports = router
