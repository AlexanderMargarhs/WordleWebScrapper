const puppeteer = require('puppeteer');

const getBrowser = async () => {
	try {
		const browser = await puppeteer.launch({
			headless: false,
		});
		return browser;
	}
	catch (err) {
		console.log("Could not create a browser instance => : ", err);
		// Mock browser, should throw instead.
		return {
			newPage: () => ({
				goto: () => { },
			})
		};
	}
};

module.exports = getBrowser;