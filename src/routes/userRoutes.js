const express = require('express')
const router = express.Router()
const { getUser, updateUser, getAllUsers } = require('../controllers/userController')
const { requireAuth } = require('../middleware/authMiddleware')

router.get('/:userId', getUser)
router.put('/:userId', requireAuth, updateUser)
router.get('/', getAllUsers)

module.exports = router
