const fs = require("fs");
const path = require("path");

const wordList = async () =>
  fs
    .readFileSync(path.join(__dirname, "../wordle_words.txt"))
    .toString("utf-8")
    .split("\n");

module.exports = wordList;
