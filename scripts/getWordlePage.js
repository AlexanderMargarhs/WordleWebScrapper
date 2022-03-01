const getWordlePage = async (browserInstance) => {

	const page = await browserInstance.newPage();
	await page.goto("https://www.nytimes.com/games/wordle/index.html");

	return page;
};

module.exports = getWordlePage;