// Define the guessList array
let guessList = [
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
];

// Variable to track the number of incorrect guesses
let incorrectGuesses = 0;

// Function to select a random word from guessList and populate the hint and game-word elements
function selectRandomWord() {
    // Reset the number of incorrect guesses
    incorrectGuesses = 0;
    
    // Get a random index within the range of guessList array length
    const randomIndex = Math.floor(Math.random() * guessList.length);
    // Get the randomly selected word object
    const selectedWord = guessList[randomIndex];
    
    // Populate the hint
    const hintElement = document.querySelector('.clue');
    hintElement.textContent = selectedWord.hint;

    // Clear previous content of game-word
    const gameWordElement = document.querySelector('.game-word');
    gameWordElement.innerHTML = '';

    // Split the word into individual letters and create input elements for each letter
    selectedWord.word.split('').forEach(letter => {
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.classList.add('letter');
        inputElement.maxLength = 1; // Set max length to 1
        inputElement.dataset.letter = letter; // Store the correct letter as data attribute
        inputElement.addEventListener('input', handleInput); // Add event listener for input
        gameWordElement.appendChild(inputElement);
    });
    
    // Display the initial hangman image
    displayHangman(incorrectGuesses);

     // Update the paragraph with the selected word
     const wordParagraph = document.querySelector('.game-end p b');
     wordParagraph.textContent = selectedWord.word;
}

// Function to handle user input
function handleInput(event) {
    const enteredLetter = event.target.value.toLowerCase(); // Get the entered letter in lowercase
    const correctLetter = event.target.dataset.letter.toLowerCase(); // Get the correct letter from data attribute
    
    // Store the incorrect letter before clearing the input field
    const incorrectLetter = event.target.value;
    
    // Check if the entered letter matches the correct letter
    if (enteredLetter === correctLetter) {
        // Add the #correct ID to the input field
        event.target.setAttribute('id', 'correct');
        // Disable the input field
        event.target.disabled = true;
        // Move focus to the next input field
        const nextInput = event.target.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
        
        // Check if all letters have been guessed correctly
        const allCorrect = [...document.querySelectorAll('.game-word .letter')].every(letterInput => letterInput.disabled);
        if (allCorrect) {
            // Call function to select a new random word
            selectRandomWord();
        }
    } else {
        // Increment the number of incorrect guesses
        incorrectGuesses++;
        // Replace the hangman image based on the number of incorrect guesses
        displayHangman(incorrectGuesses);
        
        // Check if maximum incorrect guesses reached
        if (incorrectGuesses >= 6) {
            // Delay showing game over message to display the last hangman image
            setTimeout(() => {
                // Display game over message
                document.querySelector('.game-end').style.display = 'flex';
                document.querySelector('.game-end').style.justifyContent = 'center'; // Center horizontally
                document.querySelector('.game-end').style.alignItems = 'center'; // Center vertically
            }, 500); // Delay for 500 milliseconds (adjust as needed)
        } else {
            // Set the input field value back to the incorrect letter
            event.target.value = incorrectLetter;
            // Display a pop-up alert for incorrect letter
            setTimeout(() => {
                alert("Incorrect letter. Please try again.");
                // Clear the input field for incorrect letter after a short delay
                setTimeout(() => {
                    event.target.value = '';
                }, 100);
            }, 0); // Set a timeout of 0 to ensure the alert is shown after the incorrect letter is visible
        }
    }
}

// Function to display the hangman image
function displayHangman(incorrectGuesses) {
    // Get the hangman image element
    const hangmanImg = document.querySelector('.hangman-box img');
    // Set the source of the hangman image based on the number of incorrect guesses
    hangmanImg.setAttribute('src', `assets/images/hangman-${incorrectGuesses}.svg`);
}

// Call the function to initially populate the page with a random word
selectRandomWord();

// Event listener for "Try Again" button
document.querySelector('.new-game').addEventListener('click', () => {
    // Hide the game-end div
    document.querySelector('.game-end').style.display = 'none';
    // Call the function to select another random word
    selectRandomWord();
});


