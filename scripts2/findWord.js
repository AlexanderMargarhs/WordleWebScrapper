const getWordlePage = async (browserInstance) => {
  const page = await browserInstance.newPage();
  await page.goto("https://www.wordle.net/");
  return page;
};

const findWord = async (browserInstance, wordList) => {
  const page = getWordlePage(browserInstance);
  let word = "";

  // Figure out word using wordList

  return word;
};

module.exports = findWord;
