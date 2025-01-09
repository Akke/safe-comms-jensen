const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")

const login = async (req, res) => {
    const { username, password } = req.body;


    try {
    const findUser = await User.findOne ({ username })
    if (!findUser) {
        return res.status(404).json({ message: 'Användare finns inte' })
    }

    const checkPassword = await bcrypt.compare(password, findUser.password) 
    if (!findUser.password) {
        return res.status(401).json({ message: 'Ogiltigt lösenord' })
    }

    const token = jwt.sign(
        { id: findUser._id, username: user.username },
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    )

    res.status(200).json({token})

} catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
}
}

const conversation = require('../models/conversationModel');


const getAllConversations = async (req, res) => {
    try {
        const conversations = await conversation.find();
        res.json(conversations);
    } catch (err) {
        res.status(500).json({ error: 'Kunde inte hämta konversationer.'});
    }
};

const createConversation = async (req, res) => {
    try {
        const { title, participants } = req.body;
        const newConversation = new Conversation ({ title, participants });
        await newConversation.save();
        res.status(201).json(newConversation);
    } catch (err) {
        res.status(500).json({ error: 'Kunde inte skapa konversation! '});
    }
};

module.exports = { getAllConversations, createConversation, login }; 