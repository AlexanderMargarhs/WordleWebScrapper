const browser = require('./browser');
const readFile = require('./readFile');
const openWordle = require('./openWordle');
const findWord = require('./findWord');
const uniqueLetterWords = require('./uniqueLetterWords');

(async () => 
{
	const browser = await browser(); //Start the browser and create a browser instance.

	const wordList = await readFile(); // Load all the words from the txt file.
	
	const page = await openWordle(browser);  // Open wordle, still hangs :/.

	try 
	{
		const words = await findWord(browser, wordList);
		
		const uniqueWords = await uniqueLetterWords(wordList);
		
		// word = 'light';
		console.log(`Word found: ${word}`);
	}
	catch (err) 
	{
		console.error(err);
	}
	await browser.close();
})();