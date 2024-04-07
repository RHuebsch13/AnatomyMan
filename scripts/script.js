// list of words to be used in the game. Credit to CodingNepal for using an array to hold words and hints.
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
        {
            word: "telogen",
            hint: "resting phase of the hair growth cycle"
        },
        {
            word: "malleus",
            hint: " ossicle that is directly attached to the tympanic membrane"
        },
        {
            word: "saccule",
            hint: "structure of the inner ear responsible for transducing linear acceleration in the vertical plane"
        },
        {
            word: "tetanus",
            hint: "a continuous fused contraction"
        },
        {
            word: "gingiva",
            hint: "gum"
        },
        {
            word: "papilla",
            hint: "a bump-like projection on the surface of the tongue that contains taste buds"
        },
        {
            word: "forearm",
            hint: "region of the upper limb located between the elbow and wrist joints"
        },
        {
            word: "heparin",
            hint: "anticoagulant stored in mast cells and released when tissues are injured"
        },
        {
            word: "incisor",
            hint: "chisel-shaped tooth used for cutting into food"
        },
        {
            word: "jugular",
            hint: "blood vessel that brings blood from the head and neck"
        },
        {
            word: "nephron",
            hint: "functional units of the kidney that carry out all filtration and modification to produce urine"
        },
        {
            word: "oogonia",
            hint: "ovarian stem cells that undergo mitosis during female foetal development to form primary oocytes"
        },
        {
            word: "patella",
            hint: "kneecap"
        },
    ];
    
    let guessedCorrectWords = [];
    let guessedIncorrectWords = [];
    let incorrectGuesses = 0;
    let totalCorrectGuesses = 0;
    let totalIncorrectGuesses = 0;
    
 /**
 * Selects a random word from the guessList array and sets up the game UI.
 */
    function selectRandomWord() {
        if (guessedCorrectWords.length === guessList.length) {
            alert("Congratulations! You've guessed all words correctly. Start a new game.");
            return;
        }
    
        let availableWords = guessList.filter(wordObj => !guessedCorrectWords.includes(wordObj.word) && !guessedIncorrectWords.includes(wordObj.word));
    
        if (availableWords.length === 0) {
            alert("All words have been guessed. Some were incorrect. Start a new game.");
            return;
        }
    
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const selectedWord = availableWords[randomIndex];
    
        const hintElement = document.querySelector(".clue");
        hintElement.textContent = selectedWord.hint;
    
        const gameWordElement = document.querySelector(".game-word");
        gameWordElement.innerHTML = "";
    
        selectedWord.word.split("").forEach(function(letter) {
            const inputElement = document.createElement("input");
            inputElement.setAttribute("type", "text");
            inputElement.classList.add("letter");
            inputElement.maxLength = 1;
            inputElement.dataset.letter = letter;
            inputElement.addEventListener("input", handleInput);
            gameWordElement.appendChild(inputElement);
        });
    
        displayHangman(incorrectGuesses);
    }
    
/**
 * Handles user input when a letter is guessed.
 * @param {Event} event - The input event.
 */
    function handleInput(event) {
        const enteredKey = event.data;
        const inputElement = event.target;
    
        if (!/^[a-zA-Z]$/.test(enteredKey)) {
            event.target.value = ""; // Clear the input field
            return;
        }
    
        const enteredLetter = enteredKey.toLowerCase();
        const correctLetter = inputElement.dataset.letter.toLowerCase();
    
        if (!inputElement.dataset.guessedLetters) {
            inputElement.dataset.guessedLetters = "";
        }
    
        if (inputElement.dataset.guessedLetters.includes(enteredLetter)) {
            alert("You have already tried that letter.");
            event.target.value = ""; // Clear the input field
            return;
        }
    
        inputElement.dataset.guessedLetters += enteredLetter;
    
        if (enteredLetter === correctLetter) {
            handleCorrectInput(inputElement);
        } else {
            handleIncorrectInput(inputElement, enteredKey);
        }
    }
    
/**
 * Handles correct input (correctly guessed letter).
 * @param {HTMLElement} target - The target input element.
 */
    function handleCorrectInput(target) {
        target.setAttribute("id", "correct");
        target.disabled = true;
        const nextInput = target.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    
        const allCorrect = Array.from(document.querySelectorAll(".game-word .letter")).every(function(letterInput) {
            return letterInput.disabled;
        });
        if (allCorrect) {
            handleCorrectGuess();
        }
    }
    
/**
 * Handles incorrect input (incorrectly guessed letter).
 * @param {HTMLElement} target - The target input element.
 * @param {string} incorrectLetter - The incorrectly guessed letter.
 */
    function handleIncorrectInput(target, incorrectLetter) {
        incorrectGuesses++;
        displayHangman(incorrectGuesses);
    
        if (incorrectGuesses >= 6) {
            handleGameOver();
            guessedIncorrectWords.push(target.dataset.letter);
        } else {
            target.value = incorrectLetter;
            setTimeout(() => {
                alert("Incorrect letter. Please try again.");
                setTimeout(function() {
                    target.value = "";
                }, 100);
            }, 0);
        }
    }
    
/**
 * Handles a correct word guess.
 */
    function handleCorrectGuess() {
        const selectedWord = Array.from(document.querySelectorAll(".game-word .letter")).map(input => input.dataset.letter).join('');
        guessedCorrectWords.push(selectedWord);
        totalCorrectGuesses++;
        document.querySelector(".right-answers b").textContent = totalCorrectGuesses;
        selectRandomWord();
        if (guessedCorrectWords.length === guessList.length) {
            alert("Congratulations! You've guessed all words correctly. Start a new game.");
        } else {
            document.querySelector(".game-yay").style.display = "flex";
            document.querySelector(".game-yay").style.justifyContent = "center";
            document.querySelector(".game-yay").style.alignItems = "center";
        }
    }
    
/**
 * Displays the game over screen with the correct word.
 * @param {string} word - The correct word.
 */
function displayGameOver(word) {
    const gameOverElement = document.querySelector(".game-end");
    const wordPlaceholder = gameOverElement.querySelector("b");
    wordPlaceholder.textContent = word;
    gameOverElement.style.display = "flex";
    gameOverElement.style.justifyContent = "center";
    gameOverElement.style.alignItems = "center";
}

/**
 * Handles the game over scenario.
 */
function handleGameOver() {
    setTimeout(() => {
        const selectedWord = Array.from(document.querySelectorAll(".game-word .letter")).map(input => input.dataset.letter).join('');
        guessedIncorrectWords.push(selectedWord);
        displayGameOver(selectedWord);
        totalIncorrectGuesses++;
        document.querySelector(".wrong-answers b").textContent = totalIncorrectGuesses;
    }, 500);
}

    
/**
 * Displays the hangman image based on the number of incorrect guesses.
 * @param {number} incorrectGuesses - The number of incorrect guesses.
 * Credit CodingNepal for basic concept of updating Hangman image and source for images.
 */
    function displayHangman(incorrectGuesses) {
        const hangmanImg = document.querySelector(".hangman-box img");
        hangmanImg.setAttribute("src", `assets/images/hangman-${incorrectGuesses}.svg`);
    }
    document.addEventListener("DOMContentLoaded", function() {
    selectRandomWord();
    });

    document.querySelectorAll(".new-round").forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelector(".game-end").style.display = "none";
            selectRandomWord();
            newRound();
        });
    });
    
   //Starts a new round of the game.
    function newRound() {
    document.querySelector(".game-yay").style.display = "none";
    incorrectGuesses = 0;
    displayHangman(incorrectGuesses);
    const letterInputs = document.querySelectorAll(".game-word .letter");
    letterInputs.forEach(input => {
        input.removeAttribute("id");
        input.disabled = false;
        input.value = "";
        input.dataset.guessedLetters = "";
    });
}
    
    document.querySelector(".reset").addEventListener("click", function() {
        const confirmed = window.confirm("Are you sure you want to start a new game?");
        if (confirmed) {
            document.querySelector(".game-end").style.display = "none";
            document.querySelector(".game-yay").style.display = "none";
            totalCorrectGuesses = 0;
            totalIncorrectGuesses = 0;
            guessedCorrectWords = [];
            guessedIncorrectWords = [];
            document.querySelector(".right-answers b").textContent = totalCorrectGuesses;
            document.querySelector(".wrong-answers b").textContent = totalIncorrectGuesses;
            newRound();
        }
    });
    
/**
 * Updates the star rating based on user selection.
 * @param {number} rating - The selected rating.
 */
    function rateStar(rating) {
        currentRating = rating;
        highlightStars(rating);
        updateFeedbackBox(rating);
    }
    
/**
 * Highlights the star ratings based on the selected rating.
 * @param {number} rating - The selected rating.
 */
    function highlightStars(rating) {
        const stars = document.getElementsByClassName("fa-star");
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.toggle("checked", i < rating);
        }
    }
    
/**
 * Updates the feedback box with the selected rating.
 * @param {number} rating - The selected rating.
 */
    function updateFeedbackBox(rating) {
        let ratingText = rating + " star"; 
        if (rating !== 1) {
            ratingText += "s"; // For plural if rating is not 1
        }
        document.getElementById("ratingInput").value = ratingText;
    }
    
 /**
 * Sends feedback using EmailJS.
 * @param {Event} event - The form submission event.
 */
  function sendFeedback(event) {
    event.preventDefault();
    const feedbackForm = document.getElementById("ratingForm");
    const feedbackMessage = feedbackForm.feedback.value.trim(); // Trim whitespace

    if (feedbackMessage === "") {
        alert("Feedback message cannot be empty.");
        return; // Stop execution if the feedback message is empty
    }

    const feedbackData = {
        message: feedbackMessage,
    };

    // Initialize EmailJS
    emailjs.init("_ePANf65tKkhxY7nj");

    // Send feedback via EmailJS
    emailjs.send("service_8x2fghb", "template_fc38s9b", feedbackData)
        .then(handleFeedbackSuccess)
        .catch(handleFeedbackFailure);
    }
    
    // Function to handle successful feedback submission
    function handleFeedbackSuccess() {
        alert("Feedback submitted successfully!");
        document.getElementById("ratingForm").reset(); // Reset the form after successful submission

        const stars = document.getElementsByClassName("fa-star");
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.remove("checked");
        }
    }
    
    // Function to handle failed feedback submission
    function handleFeedbackFailure() {
        alert("Failed to submit feedback. Please try again later.");
    }
   