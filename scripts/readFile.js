const fs = require("fs");

const wordList = async () =>
	JSON.parse(fs.readFileSync("../wordle_words.json", 'utf8'))

module.exports = wordList;