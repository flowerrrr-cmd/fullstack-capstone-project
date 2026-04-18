const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');

router.get('/api/gifts', async (req, res) => {
    const db = await connectToDatabase();
    res.json([{ id: 1, name: "Book" }]);
});

router.get('/api/gifts/:id', async (req, res) => {
    const db = await connectToDatabase();
    res.json({ id: req.params.id, name: "Book" });
});

module.exports = router;