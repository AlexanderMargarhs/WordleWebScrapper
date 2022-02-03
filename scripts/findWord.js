const getUniqueLetterWords = require('./getUniqueLetterWords');
const openWordle = require('./openWordle');


const findWord = async (browserInstance, wordList) => {

	const page = await openWordle(browserInstance);

	let uniqueLetterWords = await getUniqueLetterWords(wordList);

	return word;
};

module.exports = findWord;