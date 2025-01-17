const Conversation = require('../models/conversationModel');

const getAllConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find();
        res.json(conversations);
    } catch (err) {
        res.status(500).json({ error: 'Något gick fel vid hämtning av konversationer!' });
    }
};

const createConversation = async (req, res) => {
    try {
        const { title, participants } = req.body;
        const newConversation = new Conversation({ title, participants });
        await newConversation.save();
        res.status(201).json(newConversation);
    } catch (err) {
        res.status(500).json({ error: 'Något gick fel vid skapande av konversation!' });
    }
};

module.exports = { getAllConversations, createConversation };
