const express = require('express');
const router = express.Router();

router.get('/api/search', (req, res) => {
    const category = req.query.category;
    res.json([{ category }]);
});

module.exports = router;