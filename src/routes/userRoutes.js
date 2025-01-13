const express = require('express')
const router = express.Router()
const { getUser, updateUser, createUser, getAllUsers } = require('../controllers/userController')
const { requireAuth } = require('../middleware/authMiddleware')

router.get('/:userId', getUser)
router.put('/:userId', requireAuth, updateUser)
router.post("/", createUser)
router.get('/', getAllUsers)

module.exports = router
