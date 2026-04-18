const express = require('express');
const router = express.Router();

router.post('/api/register', (req, res) => {
    res.json({ message: "User registered" });
});

router.post('/api/login', (req, res) => {
    res.json({ token: "12345" });
});

router.put('/api/user', (req, res) => {
    res.json({ message: "User updated" });
});

module.exports = router;