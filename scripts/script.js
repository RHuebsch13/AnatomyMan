// word to be guessed with hints
let guessList = [
    {
        word: "bursa",
        hint: "connective tissue sac containing lubricating fluid"
    },
    {
        word: "lacteal",
        hint: "lymphatic capillary in the villi"
    },
    {
        word: "osteoid",
        hint: "uncalcified bone matrix secreted by osteoblasts"
    },
    {
        word: "calyces",
        hint: "cup-like structures receiving urine from the collecting ducts"
    },
    {
        word: "humerus",
        hint: "single bone of the upper arm"
    },
    {
        word: "pleura",
        hint: "serous membrane that lines the pleural cavity and covers the lungs"
    },
    {
        word: "acinus",
        hint: "cluster of glandular epithelial cells in the pancreas"
    },
    {
        word: "lateral",
        hint: "to the side of, or away from, the middle of the body"
    },
    {
        word: "ventral",
        hint: "refers to the front of the body"
    },
    {
        word: "fimbria",
        hint: "finger-like projections on the ends of your fallopian tubes closest to your ovaries (singular form)"
    },
    {
        word: "aorta",
        hint: "largest artery in the body"
    },
    {
        word: "cell",
        hint: "smallest independently functioning unit of all organisms"
    }

];

function updateHint() {
    // Randomly select a hint from guessList
    let randomWord = Math.floor(Math.random() * guessList.length);
    let randomHint = guessList[randomWord].hint;

    // Update the HTML content with the selected hint
    document.querySelector('.clue').textContent = randomHint;

    // Update the game word length
    let gameWord = guessList[randomWord].word;
    let gameWordLength = gameWord.length;
    let gameWordContainer = document.querySelector('.game-word');

    // Clear previous content
    gameWordContainer.innerHTML = '';

    // Populate with spans for each letter
    for (let i = 0; i < gameWordLength; i++) {
        let letterSpan = document.createElement('span');
        letterSpan.classList.add('letter');
        gameWordContainer.appendChild(letterSpan);
    }
}

// Call the function initially to set a random hint and populate the game word length
updateHint();


//correct letter and wrong guess letters
function compareLetter(letter) {
    // Get the current game word
    let gameWord = document.querySelector('.game-word').textContent;
    
    // Convert the game word to lowercase for case-insensitive comparison
    gameWord = gameWord.toLowerCase();

    // Check if the pressed letter exists in the game word
    let letterFound = false;
    for (let i = 0; i < gameWord.length; i++) {
        if (gameWord[i] === letter.toLowerCase()) {
            // If the letter matches, update the corresponding span with the letter and add an id of 'correct'
            let letterSpan = document.querySelectorAll('.letter')[i];
            letterSpan.textContent = gameWord[i];
            letterSpan.id = 'correct';
            letterFound = true;
        }
    }

    // If the letter is not found in the game word, handle it as a wrong answer
    if (!letterFound) {
        handleWrongAnswer();
    }
};



//score

//timer

//you lose
//you win


