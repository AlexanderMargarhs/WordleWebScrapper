const browser = require('./browser');
const readFile = require('./readFile');
const findWord = require('./findWord');
const getWordlePage = require('./openWordle');

(async () => {
	const browserInstance = await browser(); //Start the browser and create a browser instance.

	const wordsList = await readFile(); // Load all the words from the txt file.

	try {
		const word = await findWord(browserInstance, wordsList);

		console.log(`Word found: ${word}`);
	}
	catch (err) {
		console.error(err);
	}
	await browserInstance.close();
})();