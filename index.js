const express = require('express');
const natural = require('natural');

const app = express();
app.use(express.json());

const giftRoutes = require('./giftRoutes');
const searchRoutes = require('./searchRoutes');
const authRoutes = require('./authRoutes');

app.use(giftRoutes);
app.use(searchRoutes);
app.use(authRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));