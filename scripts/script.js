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

// keyboard
// Function to handle keyboard input
function handleKeyPress(event) {
    const key = event.key.toLowerCase(); // Convert to lowercase to handle both uppercase and lowercase letters
    const alphabetRegex = /^[a-z]$/; // Regular expression to match alphabets

    if (key.match(alphabetRegex)) {
        // Check if the pressed key is a letter
        const gameWordSpans = document.querySelectorAll('.game-word .letter');
        for (let i = 0; i < gameWordSpans.length; i++) {
            const span = gameWordSpans[i];
            if (!span.textContent && guessList[currentIndex].word[i] === key) {
                // If the span is empty and the key matches the letter at the current index of the word
                span.textContent = key;
                checkCorrectness();
                break; // Exit loop after adding the letter
            }
        }
    } else if (event.key === 'Backspace') {
        // Handle backspace to remove letters
        const gameWordSpans = document.querySelectorAll('.game-word .letter');
        for (let i = gameWordSpans.length - 1; i >= 0; i--) {
            const span = gameWordSpans[i];
            if (span.textContent) {
                span.textContent = '';
                break; // Exit loop after removing the letter
            }
        }
    }
}

// Add event listener for keypress events
document.addEventListener('keypress', handleKeyPress);
// Function to check if the placed letters are correct
function checkCorrectness() {
    const gameWordSpans = document.querySelectorAll('.game-word .letter');
    const currentWord = guessList[currentIndex].word;

    let correctCount = 0;
    for (let i = 0; i < gameWordSpans.length; i++) {
        const span = gameWordSpans[i];
        if (span.textContent === currentWord[i]) {
            // If the letter in the span matches the corresponding letter in the word
            correctCount++;
            span.classList.add('correct'); // Add CSS class to indicate correct letter
            span.contentEditable = false; // Disable editing for correct letters
        }
    }

    // Update correct answer count
    const correctAnswerElement = document.querySelector('.right-answers b');
    correctAnswerElement.textContent = `${correctCount} / ${currentWord.length}`;

    // Check if all letters are correctly guessed
    if (correctCount === currentWord.length) {
        // Show game over message or proceed to the next word
        console.log('Game over!');
    }
}

//correct letter 

//score

//wrong guess letters

//timer

//you lose
//you win


