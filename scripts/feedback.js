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
        ratingText += "s"; 
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
    document.getElementById("ratingForm").reset(); 

    const stars = document.getElementsByClassName("fa-star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("checked");
    }
}

// Function to handle failed feedback submission
function handleFeedbackFailure() {
    alert("Failed to submit feedback. Please try again later.");
}

