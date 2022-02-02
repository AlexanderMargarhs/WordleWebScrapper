const getWordlePage = async (browserInstance) => 
{
	const page = await browserInstance.newPage();
	await page.goto("https://www.powerlanguage.co.uk/wordle/");
	return page;
};

module.exports = getWordlePage;