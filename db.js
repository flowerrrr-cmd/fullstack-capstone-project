const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

async function connectToDatabase() {
    await client.connect();
    return client.db('giftlink');
}

module.exports = connectToDatabase;