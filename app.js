const express = require('express');
const app = express();

app.use('/api/search', (req, res) => {
    res.send("Search route working");
});

module.exports = app;