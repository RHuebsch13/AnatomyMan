![Logo](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/logo.png?raw=true)
# AnatomyMan

# 1. UX
## User Research
Identified key user personas, ie. People who study anatomy, the body, and how it works. The user group would be students of anatomy.

## Project goals
The goals of this project are to produce a fun, interactive game that gives users a different way to continue to learn. It also aims to help the user practice terminology and spelling of various terms used in the field of anatomy.

## User Goals
The user will have easy access to the website features, including an informative instructions page and a interactive hangman game. To further user interaction, there is a star rating feedback form where users may communicate with the developers. To achieve responsive design; flexible layouts and a mobile first approach is used to extend acessiblity to as many screens as possible.


## User Stories
As a visiting user, I would like to access the instructions so that I know the game rules.
* 'How to Play' page avaiable to user to view. Includes instructions and game objectives.

As a visiting user, I would like to keep track of my incorrect and correct answers.
* Updating scores displayed. Shows a score for both incorrect answers and correct answers.

As a visiting user, I would like to send feedback about my user experience.
* Feedback form at the button of 'How to play' with interactive star rating.

As a visiting user, I would like to have a clear understanding of which letters are correct/incorrect.
* Correct letters turn green and can not be removed.

As a visiting user, I would like to have access to hints when I struggle to find the word.
* A hint is displayed and easy to see, in an attention-catching div.

As a visiting user, I would like to know how many attempts I have left to guess the word.
* The hangman noose will update until a fully drawn stickman is visible, this means the game is over.

## Design choices
The design aims to be visually appealing, with an interface that is simple. The color scheme reflects retro arcade colours that are fun and bright. Colour change is used to notify the user when letters are correct, these correct letters will also be disabled. GoodUI was comsulted to help the project follow common and consistent UI/UX conventions. Only high-quality images are used to ensure a positive user experience.  All design choices are made to create an easy to use and easy to naviagte website. The webpage has a traditional 2 page layout with continuity in terms of navbar and content layout. All of these common elements remain in the same place on each page. This makes the site easy to learn, use and navigation for the user.


### Fonts
Raleway is used throughout the webpage. It is a sans-serif font with thin, font-weight lines and large letter spacing. It creates a comfortable reading experience that matches the overall feel of the page, without compromising page space.

### Colours
This colour scheme draws on the iconic era of arcade games and employs the retro colours to engage the user. They are bright and happy colours and bring a theme of fun to the page.

![colour scheme](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/colors.png?raw=true)

### Styling
The nav bar is clear and easy to see, the logo "anatomyman" is clearly displayed. The focal point of the page is the interactive game space. This space is made up of two divs that contribute to the user experience of the game. The classic empty handman noose, letter input squares and the hint box share the space. The instruction page is simply laid out to allow for quick and easy reading to help the user learn how to play. A feedback form is under the instructions and uses a star rating which can be sent to a developer email. This is using EmailJS. The feedback form can be edited so that the user can insert comments with or instead of the star rating.

### Backgrounds
The design choice of one solid background colour was made to maintain accessibility for the user. Solid colours were used to make the content stand out.
 
### Content
Instructions that guide the user to play the game so the rules are understood and there is no confusion. There are letter input spaces that will work with the users' keyboard. There is a progressive hangman image that updates as the user gets answers wrong, to eventually reach the well-known fully drawn hanged man. And updating tallying scores for both correct and incorrect answers. Several pop-ups and alerts that are used to guide the user through the game. There is a star rating feedback. 

## Wireframes
Designed in balsamiq, there are 3 wireframes for each page. Providing planned layout and views on large screens, medium screens and small screens.

![wireframe big screen](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/large.index.png?raw=true)
![wireframe big screen](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/large.instruct.png?raw=true)
![wireframe medium screen](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/medium.index.png?raw=true)
![wireframe medium screen](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/medium.instruct.png?raw=true)
![wireframe small screens](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/small.png?raw=true)


# 2. Features

## Existing Features
* Navbar dropdown: this only becomes visible when the screen real-estate is less than 768px, making the navbar easily accessible even on a smaller screen. Showing the ability to prioritizing content and features for smaller screens while maintaining a seamless user experience. The purpose of this is to ensure that the website will work for as many people as possible across as many different devices as possible.

* Instructions on how the game works.

* Progressive hangman image that updates as the user gets answers wrong, to eventually reach the well-known fully drawn hanged man.

* Interactive input letters the user will interact with to find the word. Letters put in the input boxes that are correct will be disbaled and change in colour.

* Interactive star rating that can be sent to the developer by emailJS.

* Pop-ups and alerts to inform the user of the consequences of their activity. i.e got the word correct, ran out of guesses and got the word wrong, the letter entered was right/wrong, the letter entered has already been entered etc.


## Left to Implement
* Timer to increase challenge aspect.

* Colour changes to the interface activate as the timer runs down.

# 3. Technology Used

HTML, CSS, JavaScript, Bootstrap, jQuery JavaScript library, EmailJS.

CSS styling is applied as:

line 1 navbar

line 26 index.html

line 92 instructions.html

line 149 pop-ups/buttons

line 239 media queries

# 4. Testing
Testing is done to verify that the software behaves as expected and meets the specified requirements. There are two types of testing, both are undertaken in this project: Manual testing involves human testers executing test cases for verification, while Automation testing involves the use of automation tools to execute tests. Jest is an example of such tools.
## Results
### Manual Testing
#### selectRandomWord()
* Ensure hints are displayed.
* Ensure the word is not visible but input fields for each letter of the word are generated.
* Verify that the hangman image is displayed.
![HintDisplay](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/hintDisplayed.png?raw=true)
![NewHintDisplay](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/hintDisplayed2.png?raw=true)
![InputMatch](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/inputWorks.png?raw=true)

* The above shots show that hints from the array guessList are diplayed, a new hint is displayed in each round and that the word that matches the hint is not visible but is generated in the respective input elements. The empty hangman frame is also dsiplayed on the page before any guesses are made.

#### displayHangman(incorrectGuesses):

* Test with different values of incorrectGuesses (0 to 6).
* Confirm that the correct hangman image is displayed for each value.
![guess1](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/guess1.png?raw=true)
![guess2](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/guess2.png?raw=true)
![guess3](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/guess3.png?raw=true)
![guess4](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/guess4.png?raw=true)
![guess5](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/guess5.png?raw=true)
![guess6](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/guess6.png?raw=true)
![gameOver](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/gameOver.png?raw=true)

* The above shots shows that the hangman image updates and displays with the amount of incorrect guesses.


#### handleInput(event):

* Test with correct letter input.
* Check if the input is marked as correct.
* Confirm that disabled and move to the next input works.
* Verify if the new word is selected when all letters are correct.
* Test with incorrect letter input.
* Ensure that incorrect guesses are incremented.
* Confirm if the hangman image updates accordingly.
* Check if game-over message is displayed when max incorrect guesses are reached.
* Verify if incorrect letter alert is shown.
* Ensure the functionality of clearing input when an incorrect letter is entered.
![correctInput](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/inputCorrect.png?raw=true)
![incorrectInput](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/inputNot.png?raw=true)
![sameLetter](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/sameLetter.png?raw=true)
![scoreUpdate](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/newGame1.png?raw=true)
![scoreUpdate](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/scoreUpdate.png?raw=true)
![guess1](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/guess1.png?raw=true)
![gameOver](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/gameOver.png?raw=true)

* As shown above; if the letter is correct, the letter will go green and can not be removed as the letter has been successfully disabled. If the letter is incorrect, a pop-up will appear to inform the user of this and the hangman image updates accordingly. If the user enters the same letter more than once in the same input field, a pop-up informing the user of this will be displayed. The input is cleared after the user closes the pop-up. A new word is selected if the word is guessed correctly/incorrectly. If the word is not guessed correctly before reaching max guesses(6), the correct answer is successfully displayed in the game-over message. The score updates as expected. 

#### newRound():

* Check if incorrect guesses are reset to 0.
* Verify if hangman display is reset.
* Confirm if input fields are enabled and cleared.
![imageResets](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/newGameHangman.png?raw=true)
![scoreResets](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/newGame3.png?raw=true)
![clearedReset](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/newGameHangmanreset.png?raw=true)

* The New Game button resets the game as expected.

#### rateStar():

* Test with different ratings (0 to 5).
* Check if stars are highlighted according to the selected rating.
* Ensure the correct text is displayed in the feedback box.

#### highlightStars():

* Test with different ratings (0 to 5).
* Confirm if stars are highlighted up to the given rating and not beyond.
![1star](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/star1.png?raw=true)
![2stars](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/star2.png?raw=true)
![3stars](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/star3.png?raw=true)
![4stars](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/star4.png?raw=true)
![5stars](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/star5.png?raw=true)
![ownFeedback](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/star5Own.png?raw=true)

* The above shots validate both the rateStar function and the highlightstar function. Stars highlight as expected, from 0-5 and the feedback box updates as expected. The user is able to add their own comments along with the star rating or delete the poplated star rating and send only their own input. These feedback responses are sucessfully sent to a gmail account the developer can access. This is done with Email.JS. 

#### sendFeedback(event):

* Verify if feedback is submitted successfully.
* Confirm if the form is reset after successful submission.
* Ensure an error message is displayed, if feedback form is empty.
* Confirm that the form remains unchanged once reset.
![successful](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/successfulSubmit.png?raw=true)
![failed](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/failSubmit.png?raw=true)
![error](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/errorSubmit.png?raw=true)

* If the message is submitted successfully to the gmail using Email.js, the user will see a "sucessfully sent" message. If the message could not be sent i.e network failure, the user will see a "failure to send, try again later" message. If the user tries to submit an empty message, an error message will appear. The form performs in an expected way.

## Validation Tests
- Code passed all validation tests on w3c validator, w3c CSS validator and jshint JS validator.
  - [CSS Validation](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/CSSval.png?raw=true)
  - [Index.html](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/HTMLvalHome.png?raw=true)
  - [Instructions.html](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/HTMLvalInstruct.png?raw=true)
  - [JavaScript](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/JSval.png?raw=true)

## Lighthouse Testing
- [Index.html-Desktop](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/lighthouseDesktopHome.pdf)
- [Index.html-Mobile](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/lighthouseMobileHome.pdf)
- [Instructions.html-Desktop](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/lighthouseDeskopInstruct.pdf)
- [Instructions.html-Mobile](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/lighthouseMobileInstruct.pdf)

## Bug Problems
1. Intially used divs instead of input fields. This presented with incorrect input detection. However, using input fields means that users can directly type letters using their keyboard without needing any additional event handling or JavaScript code to capture input. Switching to input fields allowed for a less bulky code. Input fields can also have built-in validation; max-length, only characters from a-z etc. As well as, providing a clearer user expectation because the input fields act as clear direction to the user that they should input something.

2. Input fields were allowing multiple characters per field. The below line of code needed to be added:
```
inputElement.maxLength = 1;
```

3. If the user has used all 6 guesses, the correct word was not displaying on the Game Over pop-up. Code has been updated so the content of the b element will be filled with the word that was not guessed.
```
function displayGameOver(word) {
    const gameOverElement = document.querySelector(".game-end");
    const wordPlaceholder = gameOverElement.querySelector("b");
    wordPlaceholder.textContent = word;
    gameOverElement.style.display = "flex";
    gameOverElement.style.justifyContent = "center";
    gameOverElement.style.alignItems = "center";
}

function handleGameOver() {
    setTimeout(() => {
        const selectedWord = Array.from(document.querySelectorAll(".game-word .letter")).map(input => input.dataset.letter).join('');
        guessedIncorrectWords.push(selectedWord);
        displayGameOver(selectedWord);
        totalIncorrectGuesses++;
        document.querySelector(".wrong-answers b").textContent = totalIncorrectGuesses;
    }, 500);
}
```
4. Stars in the feedback form were not clearing after form has been submitted. Code has been added to the handleFeedbackSuccess() to clear the input.
```
    // Clear the stars
    const stars = document.getElementsByClassName("fa-star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("checked");
    }
```
5. Empty feedback form submits and gets a "successfully sent" message. Code has been added to the handleFeedbackSuccess() display an error message.
```
const stars = document.getElementsByClassName("fa-star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("checked");
    }
```
6. When more than one star is selected, no "s" was added to "star" in the feedback field. Code was added to the updateFeedbackBox(rating) function.
```
ratingText += "s"; 
```
# 5. Deployment
This project was developed using codeanywhere and VS code IDE, commited to Git and pushed to GitHub.
To deploy this page to GitHub pages from its repository:
1. Log into Github.
2. Select repository RHuebsch13/YogiBear.
3. Select 'settings'from the menu near the top of the page.
4. Go to Github page section.
5. Under source, select deploy from a branch.
6. Select main /root under branch and click save. 
7. Refresh the page, the website is now deployed. 
8. Link can be retrived from Github pages.

## How work on the project code within a local IDE; codeanywhere or VS code
To clone this project from Github:
1. Follow this link to the Project Github respository; [here](https://github.com/RHuebsch13/)
2. Under respository name; select 'clone or download'
3. Copy the clone URL fro the repository.
4. In your IDE open the terminl.
5. Change the working directory to the location where you want the cloned directory to be made
6. Type git clone and your URL from step 3 

# 6. Credits
## Code
- Use of .match() in keyboard event listener [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- Use of querySelector() [W3schools](https://www.w3schools.com/jsref/met_document_queryselector.asp)

- Use of split() [W3schools](https://www.w3schools.com/jsref/jsref_split.asp)

- Use of Arrow Functions: Code Institute, Using Arrow FUnctions.

- Use of focus() [W3schools](https://www.w3schools.com/jsref/met_html_focus.asp)

- Use of appendChild(), setAttribute and createElement: Code Institute, Adding and Removing Elements and Writing Complex HTML With JavaScript.

- Use of taregt event property [W3schools](https://www.w3schools.com/jsref/event_target.asp)

- Use of setTimeout() [W3schools](https://www.w3schools.com/jsref/met_win_settimeout.asp)

- Use of every() [W3schools](https://www.w3schools.com/jsref/jsref_every.asp)

- Use of data- attribute [W3schools](https://www.w3schools.com/tags/att_data-.asp)

- JavaScript Comparison and Logical Operators [W3schools](https://www.w3schools.com/js/js_comparisons.asp)

- Use of querySelector(), use of Array to hold words and hints, understanding game logic and layout, use of split() [CodingNepal](https://www.codingnepalweb.com/build-hangman-game-html-javascript/)

- Email.js: Code Institute; Putting it all together.

- Email.js for feedback [Chaoo Charles](https://www.youtube.com/watch?v=bMq2riFCF90)

- Use of [JSDocs]https://jsdoc.app/tags-param

- Use of trim()[w3schools](https://www.w3schools.com/jsref/jsref_trim_string.asp)

- How to clear input fields [w3schools](https://www.w3schools.com/howto/howto_html_clear_input.asp)

## Content
- definitions used for the hints
[USQ-Pressbooks](https://usq.pressbooks.pub/anatomy/back-matter/glossary/)

## Media 
- [Colour Palette](https://www.color-hex.com/color-palette/109374)
- [Favicon-generator](https://realfavicongenerator.net/)
- [Favicon-image](https://png.pngtree.com/png-vector/20220217/ourmid/pngtree-flat-vector-of-black-hangmans-noose-for-suicide-or-lynching-vector-png-image_44501344.jpg)
- [Hangman-images](https://www.youtube.com/watch?v=hSSdc8vKP1I) in the comment section.
