// Import the functions from other files
import { returnChallenge } from './setChallenge.js';

// This allows use to cancel the dot interval (the animation)
let dotInterval;

// Get the challenge and return it to the index.js file
function getChallenge(element) {
    // Stop the dotInterval function
    clearInterval(dotInterval);

    // Variabels for the challenge button and challenge the user has to complete
    let challenge = returnChallenge();
    let button = document.querySelector(".get-challenge-btn");

    // Change the textcontent to the return value of returnChallenge()
    element.textContent = challenge;

    // Only if they user does not have to wait for the next challenge set the button to "Submit Challenge"
    if (!challenge.trim().startsWith("You have to wait")) {
        button.textContent = "Submit Challenge";
    } else {
        button.textContent = "Get Challenge"
    }
}

// A little animation for when the website first loads
function displayDots(element) {
    // Variable that should not change only once each time the interval happens
    let numOfDots = 1;
    dotInterval = setInterval(() => {
        // The thing we want to repeat
        let dot = '.';
        // Using the element param we should change the text and += 1 to the numOfDots variable
        element.textContent = `Click the button to get your challenge${dot.repeat(
            numOfDots
        )}`;
        numOfDots++;

        // If statement to reset the count
        if (numOfDots > 3) {
            numOfDots = 1;
        }
    }, 800);
}

// Export all of the functions
export { getChallenge, displayDots };
