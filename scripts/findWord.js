const getUniqueLetterWords = require('./getUniqueLetterWords');
const getWordlePage = require('./getWordlePage');

const findWord = async (browserInstance, wordList) => {

	const page = await getWordlePage(browserInstance);

	let uniqueLetterWords = await getUniqueLetterWords(wordList);
	await page.mouse.click(50, 50);

	const data = await page.querySelector("body > game-app").shadowRoot.querySelector(""); // .shadowRoot.querySelector("#board > game-row:nth-child(1)");
	console.log(data);

	let word = 'light';
	return word;
};

module.exports = findWord;