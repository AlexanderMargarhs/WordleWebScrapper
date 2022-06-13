const getBrowser = require("./scripts2/browser");
const getWordList = require("./scripts2/wordList");
const findWord = require("./scripts2/findWord");

(async () => {
  const browser = await getBrowser();
  const wordList = await getWordList();
  try {
    const word = await findWord(browser, wordList);
    console.log(`Word found: ${word}`);
  } catch (err) {
    console.error(err);
  }
})();
