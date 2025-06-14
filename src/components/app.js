// Import the functions from other files
import { returnChallenge } from './setChallenge.js';

// This allows use to cancel the dot interval (the animation)
let dotInterval;

// Get the challenge and return it to the index.js file
function getChallenge(element) {
    clearInterval(dotInterval);
    element.textContent = returnChallenge();
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
