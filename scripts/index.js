const browser = require('./browser');
const readFile = require('./readFile');
const findWord = require('./findWord');

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

	await delay(5000);
	await browserInstance.close();
})();

async function delay(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time)
	});
}