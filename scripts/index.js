const getBrowser = require('./browser');
const scraperController = require('./pageController');
const getWordList = require('./readFile');
const getWordlePage = require('./openWordle');
const findWord = require('./findWord');
const uniqueLetterWords = require('./uniqueLetterWords.js');

(async () => 
{
	const browser = await getBrowser(); //Start the browser and create a browser instance.

	const wordList = await getWordList(); // Load all the words from the txt file.
	
	const page = await getWordlePage(browser);  // Open wordle, still hangs :/.

	try 
	{
		const words = await findWord(browser, wordList);
		
		const uniqueWords = await uniqueLetterWords(wordList);
		
		console.log(uniqueLetterWords.word.length);
		word = 'light';
		console.log(`Word found: ${word}`);
	}
	catch (err) 
	{
		console.error(err);
	}
	await browser.close();
})();