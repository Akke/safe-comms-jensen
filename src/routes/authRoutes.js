const express = require("express")
const router = express.Router()
const { createUser } = require("../controllers/userController.js")
const jwt = require('jsonwebtoken');

const verifyToken = (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Access denied!' });
    }
}

router.use("/register", createUser)

module.exports = router
