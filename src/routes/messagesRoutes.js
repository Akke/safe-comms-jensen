const express = require("express")
const router = express.Router()
const { postMessage, getMessages } = require("../controllers/messageController")

router.post("/", postMessage)
router.get("/", getMessages)

module.exports = router
