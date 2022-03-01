# Web Scrapper for Wordle

This is a fun project to learn about Web Scrapping.

# How it Works
<div style="text-align: justify"> 
First of all, we initialize the browser instance, it isn't headless so that we can see what it is actually happening. Moving on, we go to the https://www.nytimes.com/games/wordle/index.html and we save all the words we are going to use in a list of words. After that, we accept cookies and dismiss the turorial from the window tab, then we try testing words. Firstly, we try random word, since we don't have any clues, we check if any letter is correct, if it is correct we save it to the according row. If the letter is absent, we just remove it from every row. Lastly, if the letter is present we only remove it from the remove that was present in. If we got all the letters correct the Web Scapper tells us which word was correct.
</div>
