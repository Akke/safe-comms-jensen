const express = require('express');
const router = express.Router();
const {
    getAllConversations,
    createConversation,
 } = require('../controllers/conversationController');

 router.get('/', getAllConversations)

 router.post('/', createConversation);

module.exports = router;