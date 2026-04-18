const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');

router.post('/api/register', async (req, res) => {
    res.json({ message: "User registered" });
});

router.post('/api/login', async (req, res) => {
    const { username } = req.body;

    const db = await connectToDatabase();
    const collection = db.collection('users');

    const user = await collection.findOne({ username });

    if (user) {
        res.json({ message: "User found", user });
    } else {
        res.json({ message: "User not found" });
    }
});

router.put('/api/user', async (req, res) => {
    res.json({ message: "User updated" });
});

module.exports = router;