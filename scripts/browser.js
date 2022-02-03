const puppeteer = require('puppeteer')

const getBrowser = async () => {
	try {
		const browser = await puppeteer.launch({
			headless: true,
			args: ["--disable-setuid-sandbox"],
			pipe: true,
			ignoreHTTPSErrors: true,
			incognito: true,
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