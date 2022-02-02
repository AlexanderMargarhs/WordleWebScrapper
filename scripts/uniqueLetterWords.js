const getUniqueLetterWords = async (wordsList) => 
{
    let expression = new RegExp('^(?:([a-z])(?!.*\1))*$');
    let uniqueLetterWords;
    for(let i = 0; i < wordsList.words.length; i++)
    {
        console.log(wordsList.words[i]);
        //uniqueLetterWords = word.exec(expression);
    }
    return uniqueLetterWords;
};

module.exports = getUniqueLetterWords;