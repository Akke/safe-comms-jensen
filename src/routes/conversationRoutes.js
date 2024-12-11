const express = require('express');
const router = express.Router();

router.get('/Conversations', (req, res) => {
    res.json({ message: 'Här kommer konversationer senare!'});
});

module.exports = router;