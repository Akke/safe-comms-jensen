const express = require("express")
const router = express.Router()

const { getEnv } = require("../controllers/envController.js")
const { requireAuth } = require("../middleware/authMiddleware.js")

router.get("/", requireAuth, getEnv)

module.exports = router