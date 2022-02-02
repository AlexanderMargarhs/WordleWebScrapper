const getWordlePage = async (browserInstance) => 
{
	console.log('Getting page.');
	const page = await browserInstance.newPage();
	console.log('Got page.');
	await page.goto("https://www.powerlanguage.co.uk/wordle/");
	return page;
};

module.exports = getWordlePage;