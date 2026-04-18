const express = require('express');
const router = express.Router();

router.get('/api/gifts', (req, res) => {
    res.json([{ id: 1, name: "Book" }]);
});

router.get('/api/gifts/:id', (req, res) => {
    res.json({ id: req.params.id, name: "Book" });
});

module.exports = router;