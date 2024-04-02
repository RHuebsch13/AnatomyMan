# AnatomyMan

# 1. UX
## User Research
Identified key user personas, ie. People who study anatomy, the body, and how it works. The user group would be students of anatomy.

## Project goals
The goals of this project are to produce a fun, interactive game that gives users a different way to continue to learn. It also aims to help the user practice terminology and spelling of various terms used in the field of anatomy.

## User Goals
The user will have easy access to the website features, including an informative instructions page and a interactive hangman game. To further user interaction, there is a star rating feedback form that user may communicate with the developers. To achieve responsive design; flexible layouts and a mobile first approach will be used to extended acessiblity to as many screens as possible.


## User Stories
As a visiting user, I would like to access the instructions so that I know the game rules.

As a visiting user, I would like to keep track of my incorrect and correct answers.

As a visiting user, I would like to have send feedbak about my user experience.

As a visiting user, I would like to have a clear understanding of which letters are correct/incorrect.

As a visiting user, I would like to have access to hints if I struggle to find the word.

As a visiting user, I would like to know how many attempts I have left to guess the word.

## Design choices
The design aims to be visually appealing, with an interface that is simple. The color scheme reflects retro arcade colours that are fun and bright. Colour change is used to notify the user when letters are correct, these correct letters will also be disabled. GoodUI was comsulted to help the project follow common and consistent UI/UX conventions. Only High-quality images are used to ensure a positive user experience.  All design choices are made to create an easy to use and easy to naviagte website. The webpage has a traditional 2 page layout with continuity in terms of navbar and content layout. All of these elements remain in the same place on each page. This makes the site easy to learn, use and navigation for the user.


### Fonts
Raleway is used throughout the webpage. It is a sans-serif font with thin, font-weight lines and large letter spacing. It creates a comfortable reading experience that matches the overall feel of the page, without compromising page space.

### Colours
This colour scheme draws on the iconic era of arcade games and employs the retro colours to engage the user. They are bright and happy colours and brings a theme of fun to the page.
![colour scheme](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/colors.png?raw=true)

### Styling
The nav bar is clear and easy to see, the logo "anatomyman" fits in the navbar. The focal point of the page is the interactive game space. This space is made up of two divs that contribute to the user experience of the game. The classic empty handman noose, letter input squares and the hint box share the space. The instruction page is simply laid out to allow for quick and easy reading to help the user learn how to play. A feedback form is under the instructions and uses a star rating which can be sent to a developer email. This is using EmailJS. The feedback form can be edited so that the user can insert comments with or instead of the star rating.

### Backgrounds
The design choice of one solid background colour was made to maintain accessibility for the user. Solid colours were used to make the content stand out.
 
### Content
Instructions that guide the user to play the game so the rules are understood and there is no confusion. There are letter input spaces that will work with the users' keyboard. There is a progressive hangman image that updates as the user gets answers wrong, to eventually reach the well-known fully drawn hanged man. There is a star rating feedback. 

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


## Left to Implement
* Timer to increase challenge aspect.

* Colour changes to the interface activate as the timer runs down.

# 3. Technology Used

HTML, CSS, JavaScript, Bootstrap, jQuery JavaScript library, EmailJS.

CSS styling is applied as:

line 1 - 17 navbar

line 26 - 90 index.html

line 92 - 138 instructions.html

line 142 - 229 pop-ups

line 231 media queries

# 4. Testing
## Results
### Manual Function  and Feature Testing
#### selectRandomWord()

Ensure a word and hint are displayed.

Check if input fields for each letter of the word are generated.

Verify that the hangman image is displayed.

#### displayHangman(incorrectGuesses):

Test with different values of incorrectGuesses (0 to 6).

Confirm that the correct hangman image is displayed for each value.

#### handleInput(event):

Test with correct letter input.

Check if the input is marked as correct.

Confirm that disabled and move to the next input works.

Verify if the new word is selected when all letters are correct.

Test with incorrect letter input.

Ensure that incorrect guesses are incremented.

Confirm if the hangman image updates accordingly.
Check if game-over message is displayed when max incorrect guesses are reached.
Verify if incorrect letter alert is shown.
Ensure the functionality of clearing input when an incorrect letter is entered.
newRound():

Test if the game-over message is hidden.
Check if incorrect guesses are reset to 0.
Verify if hangman display is reset.
Confirm if input fields are enabled and cleared.
rateStar(rating):

Test with different ratings (0 to 5).
Check if stars are highlighted according to the selected rating.
Ensure the correct text is displayed in the feedback box.
highlightStars(rating):

Test with different ratings (0 to 5).
Confirm if stars are highlighted up to the given rating and not beyond.
sendFeedback(event):

Test with a valid feedback message.
Verify if feedback is submitted successfully.
Confirm if the form is reset after successful submission.
Test with an invalid feedback message (e.g., empty message).
Ensure an appropriate error message is displayed.
Confirm that the form remains unchanged.




## Bug Problems





## After Deployment



## Validation Tests
- Code passed all validation tests on w3c validator and w3c CSS validator.
  - [CSS Validation](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/CSSval.png?raw=true)
  - [Index.html](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/HTMLvalHome.png?raw=true)
  - [Instructions.html](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/HTMLvalInstruct.png?raw=true)

## Lighthouse Testing
- [Index.html-Desktop](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/lighthouseDesktopHome.pdf)
- [Index.html-Mobile](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/lighthouseMobileHome.pdf)
- [Instructions.html-Desktop](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/lighthouseDeskopInstruct.pdf)
- [Instructions.html-Mobile](https://github.com/RHuebsch13/AnatomyMan/blob/main/docs/lighthouseMobileInstruct.pdf)

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

## Content
- definitions used for the hints
[USQ-Pressbooks](https://usq.pressbooks.pub/anatomy/back-matter/glossary/)

## Media 
- [Colour Palette](https://www.color-hex.com/color-palette/109374)
- [Favicon-generator](https://realfavicongenerator.net/)
- [Favicon-image](https://png.pngtree.com/png-vector/20220217/ourmid/pngtree-flat-vector-of-black-hangmans-noose-for-suicide-or-lynching-vector-png-image_44501344.jpg)
- [Hangman-images](https://www.youtube.com/watch?v=hSSdc8vKP1I) in the comment section.
