const browserObject = require('./browser');
const scraperController = require('./pageController');
const textOutput = require('./readFile');

// Load all the words from the txt file.
let words = textOutput.readFile();

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance)