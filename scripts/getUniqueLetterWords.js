const getUniqueLetterWords = async (wordsList) => {
	let expression = /^(?:([a-z])(?!.*\1))*$/gm; // Regex patter for unique letter words.

	let uniqueLetterWords = [];

	for (let i in wordsList) {
		if (expression.exec(wordsList) !== null) {
			uniqueLetterWords.push(wordsList[i]);
		}
	}
	return uniqueLetterWords;
};

module.exports = getUniqueLetterWords;