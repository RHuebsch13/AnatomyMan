
document.addEventListener("DOMContentLoaded", function() {
    // list of words to be used in the game
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
    
    let incorrectGuesses = 0; // stores incorrect guesses made by the player.
    let totalCorrectGuesses = 0; // adds the total correct guesses per game.
    let totalIncorrectGuesses = 0; // adds the total incorrect guesses per game.
    
    // randomly selects a word and hint from guessList
    function selectRandomWord() {
        incorrectGuesses = 0; // clears incorrect guesses for a new word selection.
    
        const randomIndex = Math.floor(Math.random() * guessList.length);
        const selectedWord = guessList[randomIndex];
    
        // shows the hint for the selected word.
        const hintElement = document.querySelector(".clue");
        hintElement.textContent = selectedWord.hint;
    
        // shows input elements for each letter of the selected word.
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
    
        // shows hangman image according to incorrect guesses.
        displayHangman(incorrectGuesses);
    
        // shows the selected word, if user runs out of guesses.
        const wordParagraph = document.querySelector(".game-end p b");
        wordParagraph.textContent = selectedWord.word;
    }
    
    // handles player's input for guessing letters.
    function handleInput(event) {
        const enteredLetter = event.target.value.toLowerCase(); // letter entered by the player.
        const correctLetter = event.target.dataset.letter.toLowerCase(); // correct letter to compare.
    
        const incorrectLetter = event.target.value; // incorrect letter entered by the player.
    
        // if the entered letter is correct.
        if (enteredLetter === correctLetter) {
            // shows the input as correct, disabling it, and move to the next input.
            event.target.setAttribute("id", "correct");
            event.target.disabled = true;
            const nextInput = event.target.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
    
            // checks if all letters are correct, then selects a new word.
            const allCorrect = Array.from(document.querySelectorAll(".game-word .letter")).every(function(letterInput) {
                return letterInput.disabled;
            });
            if (allCorrect) {
                selectRandomWord(); // new word.
                document.querySelector(".game-yay").style.display = "flex"; // shows you-win message.
                document.querySelector(".game-yay").style.justifyContent = "center";
                document.querySelector(".game-yay").style.alignItems = "center";
                totalCorrectGuesses++; // increments total correct guesses.
                document.querySelector(".right-answers b").textContent = totalCorrectGuesses; // Updates score.
            }
        } else { // if the entered letter is incorrect.
            incorrectGuesses++; // incrementing incorrect guesses.
            displayHangman(incorrectGuesses); // updating hangman image.
    
            // if the max incorrect guesses reached.
            if (incorrectGuesses >= 6) {
                setTimeout(function() {
                    document.querySelector(".game-end").style.display = "flex"; // shows game-over message.
                    document.querySelector(".game-end").style.justifyContent = "center";
                    document.querySelector(".game-end").style.alignItems = "center";
                    totalIncorrectGuesses++; // incrementing total incorrect guesses.
                    document.querySelector(".wrong-answers b").textContent = totalIncorrectGuesses; // updates score.
                }, 500);
            } else { // haven't reached max incorrect guesses.
                event.target.value = incorrectLetter; // shows incorrect letter.
                setTimeout(function() {
                    alert("Incorrect letter. Please try again."); // pop up alert.
                    setTimeout(function() {
                        event.target.value = ""; // Clear input.
                    }, 100);
                }, 0);
            }
        }
    }
    
    // replace hangman image for incorrect guesses.
    function displayHangman(incorrectGuesses) {
        const hangmanImg = document.querySelector(".hangman-box img");
        hangmanImg.setAttribute("src", `assets/images/hangman-${incorrectGuesses}.svg`);
    }
    
    selectRandomWord(); // start the game with a randomly selected word.
    
    // event listeners for new game buttons to reset the game.
    document.querySelectorAll(".new-round").forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelector(".game-end").style.display = "none"; // hide game-over message.
            selectRandomWord(); // new word
            newRound(); 
        });
    });
    
    // resets game for next word.
    function newRound() {
        document.querySelector(".game-yay").style.display = "none"; // hide you-win message.
        incorrectGuesses = 0; // reset incorrect guesses.
        displayHangman(incorrectGuesses); // reset hangman display.
        const letterInputs = document.querySelectorAll(".game-word .letter");
        letterInputs.forEach(function(input) {
            input.removeAttribute("id"); // remove styling for correct guesses.
            input.disabled = false; // enable input fields.
            input.value = ""; // clear input fields.
        });
    }
    
    document.querySelector(".reset").addEventListener("click", function() {
        // confirmation pop-up
        const confirmed = window.confirm("Are you sure you want to start a new game?");
        if (confirmed) {
            // hide game-over and you-win messages.
            document.querySelector(".game-end").style.display = "none";
            document.querySelector(".game-yay").style.display = "none";
    
            // reset scores to zero.
            totalCorrectGuesses = 0;
            totalIncorrectGuesses = 0;
            document.querySelector(".right-answers b").textContent = totalCorrectGuesses;
            document.querySelector(".wrong-answers b").textContent = totalIncorrectGuesses;
    
            // new round with a randomly selected word.
            newRound();
        } else {
            // will do nothing.
        }
    });
    });
    
    //instructions page, interactive star rating
    let currentRating = 0;
    
    function rateStar(rating) {
        currentRating = rating;
        highlightStars(rating);
        let ratingText = rating + " star"; 
        if (rating !== 1) {
            ratingText += "s"; // For plural if rating is not 1
        }
        document.getElementById("ratingInput").value = ratingText; // Update the feedback box
    }
    
    function highlightStars(rating) {
        let stars = document.getElementsByClassName("fa-star");
        for (let i = 0; i < stars.length; i++) {
            if (i < rating) {
                stars[i].classList.add("checked");
            } else {
                stars[i].classList.remove("checked");
            }
        }
    }
    
    // Initialize EmailJS
    emailjs.init("_ePANf65tKkhxY7nj");
    
    // Function to handle form submission
    function sendFeedback(event) {
        event.preventDefault();
        const feedbackForm = document.getElementById("ratingForm");
        const feedbackData = {
            message: feedbackForm.feedback.value,
        };
        
    // Send feedback via EmailJS
   emailjs.send("service_8x2fghb", "template_fc38s9b", feedbackData)
     .then(function() {
     console.log("SUCCESS!", feedbackData);
     alert("Feedback submitted successfully!");
     feedbackForm.reset(); // Reset the form after successful submission
    }, function(error) {
      console.log("FAILED...", error);
      alert("Failed to submit feedback. Please try again later.");
    });
    }

    
