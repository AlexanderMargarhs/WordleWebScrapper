const getWordlePage = require('./getWordlePage');

const findWord = async (browserInstance, wordList) => {
	let first_row_alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let second_row_alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let third_row_alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let fourth_row_alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let fifth_row_alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	const page = await getWordlePage(browserInstance);

	let word = "";

	const searchBtn = await page.$x("//*[@id='pz-gdpr-btn-accept']"); // Accept cookies.
	await searchBtn[0].click();

	await page.mouse.click(100, 100); // Remove tutorial window.

	let possible_words = [];
	let correct_word = "true";

	for (let i = 1; i < 7; i++) {
		const regexp = new RegExp('[' + first_row_alphabet.toString() + ']{1}[' + second_row_alphabet.toString() + ']{1}[' + third_row_alphabet.toString() + ']{1}[' + fourth_row_alphabet.toString() + ']{1}[' + fifth_row_alphabet.toString() + ']{1}', 'g');

		words = wordList;
		possible_words = [];
		possible_words = await getWords(regexp, words, possible_words); // Find the possible words.
		word = await possible_words[Math.floor(Math.random() * possible_words.length)]; // Get random word.

		correct_word = "true";
		await page.type("body > game-app", word); // Type the word.
		await page.keyboard.press('Enter');

		for (let j = 0; j < 5; j++) {
			await delay(500); // Await 500ms to get the result from the attribute.

			let data = await page.evaluate('document.querySelector("body > game-app").shadowRoot.querySelector("#board > game-row:nth-child(' + i + ')").shadowRoot.querySelector("div > game-tile:nth-child(' + (j + 1) + ')").shadowRoot.querySelector("div").getAttribute("data-state")');
			if (data == 'present') {
				correct_word = "false";
				if (j == 1 && first_row_alphabet.length === 1)
					await remove_letter(first_row_alphabet, word.charAt(j));
				if (j == 2 && second_row_alphabet.length === 1)
					await remove_letter(second_row_alphabet, word.charAt(j));
				if (j == 3 && third_row_alphabet.length === 1)
					await remove_letter(third_row_alphabet, word.charAt(j));
				if (j == 4 && fourth_row_alphabet.length === 1)
					await remove_letter(fourth_row_alphabet, word.charAt(j));
				if (j == 5 && fifth_row_alphabet.length === 1)
					await remove_letter(fifth_row_alphabet, word.charAt(j));

			}
			else if (data == 'correct') {
				if (j == 0)
					first_row_alphabet = word.charAt(j);
				if (j == 1)
					second_row_alphabet = word.charAt(j);
				if (j == 2)
					third_row_alphabet = word.charAt(j);
				if (j == 3)
					fourth_row_alphabet = word.charAt(j);
				if (j == 4)
					fifth_row_alphabet = word.charAt(j);
			}
			else if (data == 'absent') {
				correct_word = "false";
				await remove_letter(first_row_alphabet, word.charAt(j));
				await remove_letter(second_row_alphabet, word.charAt(j));
				await remove_letter(third_row_alphabet, word.charAt(j));
				await remove_letter(fourth_row_alphabet, word.charAt(j));
				await remove_letter(fifth_row_alphabet, word.charAt(j));
			}
		}

		if (correct_word === "true")
			break;
	}

	console.log("first letters", first_row_alphabet);
	console.log("2nd letters", second_row_alphabet);
	console.log("3rd letters", third_row_alphabet);
	console.log("4th letters", fourth_row_alphabet);
	console.log("5th letters", fifth_row_alphabet);
	if (correct_word === "true")
		return word;
	word = ""
	return word;
};

async function getWords(regex, words, possible_words) {
	for (let i in words) {
		if (regex.exec(words[i]) !== null) {
			possible_words.push(words[i]);
		}
	}

	return possible_words;
}

async function remove_letter(array, letter_to_remove) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === letter_to_remove && array.length > 1) {
			array.splice(i, 1);
		}
	}
	return array;
}


async function delay(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time)
	});
}

module.exports = findWord;