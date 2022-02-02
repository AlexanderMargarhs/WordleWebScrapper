var fs = require("fs");

const textOutput = {
    filename: "",
    async readFile()
    {
        console.log("Loading words......");
        var text = fs.readFileSync("../wordle_words.txt").toString('utf-8').split('\n');
        
        return text;
    }
}

module.exports = textOutput;