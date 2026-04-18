const natural = require('natural');

const tokenizer = new natural.WordTokenizer();

const text = "I love this product, it's amazing!";
const tokens = tokenizer.tokenize(text);

console.log("Tokens:", tokens);