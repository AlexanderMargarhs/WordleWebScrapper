const puppeteer = require("puppeteer");

const getBrowser = async () => {
  try {
    console.log("Opening the browser......");
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
      icognito: true,
    });
    return browser;
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
    // Mock browser, should throw instead
    return {
      newPage: () => ({
        goto: () => {},
      }),
    };
  }
};

module.exports = getBrowser;
