const express = require('express')
const router = express.Router()
const { getUser, updateUser, createUser } = require('../controllers/userController')

router.get('/:userId', getUser)
router.put('/:userId', updateUser)
router.post("/", createUser)

module.exports = router
