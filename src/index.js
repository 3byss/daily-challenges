// Add in all the imports I need
import { displayDots, getChallenge } from './components/app.js'

// Get the button and challenge text
let challengeBtn = document.querySelector(".get-challenge-btn");
let challengeText = document.querySelector(".body-text");

// Add a animation for the dots
displayDots(challengeText);

// Add an event listener to the button and run the getChallenge function
challengeBtn.addEventListener('click', () => getChallenge(challengeText));