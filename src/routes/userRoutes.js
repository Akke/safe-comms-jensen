const express = require('express')
const router = express.Router()
const { getUser, updateUser, createUser, getAllUsers } = require('../controllers/userController')

router.get('/:userId', getUser)
router.put('/:userId', updateUser)
router.post("/", createUser)
router.get('/', getAllUsers)

module.exports = router
