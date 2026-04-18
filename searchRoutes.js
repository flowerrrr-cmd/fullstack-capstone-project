const express = require('express');
const router = express.Router();

router.get('/api/search', (req, res) => {
    const category = req.query.category;

    const items = [
        { id: 1, name: "Book", category: "education" },
        { id: 2, name: "Toy", category: "kids" },
        { id: 3, name: "Pen", category: "education" }
    ];

    const filtered = items.filter(item => item.category === category);

    res.json(filtered);
});

module.exports = router;