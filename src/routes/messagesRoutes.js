const express = require("express")
const router = express.Router()
const { postMessage, getMessages } = require("../controllers/messageController")
const { requireAuth } = require("../middleware/authMiddleware")

router.post("/", requireAuth, postMessage)
router.get("/", getMessages)

module.exports = router
