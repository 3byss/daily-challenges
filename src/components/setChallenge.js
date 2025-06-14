// Import the async function from getDate.js
import { lookAtDate } from './getDate.js';
import { randomNumber } from './randomGenerator.js';

let returnChallenge = () => {
    // Get the date
    let currentDate = new Date().getTime();

    // This function should return a boolean value so I have to make it a variable to use later
    let canGetChallenge = lookAtDate(currentDate);

    // This function sees if we can get a new challenge
    if (canGetChallenge) {
        return makeChallenge();
    } else {
        /* 
            This should show the user how much longer the have to wait
            We have to math.floor it so it does not go to 24 hours.
            We also subract it by how many milliseconds are in a day (86400000) by how many seconds the current time from the last time is
            Divide by 1000 to get seconds
            and then divide by 3600 to get how many hours

            Contributers -> If there is a better way to do this (make it more readable or something else) please make a pull request
        */
        return `You have to wait ${Math.floor(
            (86400000 - (currentDate - localStorage.getItem('lastDate'))) /
                1000 /
                3600
        )} hour(s) to get your next challenge`;
    }
};

let makeChallenge = () => {
    // From a table pick one of the three out random then set that to the variable 'challenge'
    let challenges = ['quiz', 'quote', 'joke'];
    let getChallenge = randomNumber(0, challenges.length);
    let challenge = challenges[getChallenge];

    if (challenge == 'quiz') {
        return 'You have to go and complete a quiz make sure you get 100%';
    } else if (challenge == 'quote') {
        return 'Go get me a random quote you find on the internet';
    } else {
        return 'Give me a joke and I will tell you if I laugh';
    }
};

// Export all of the functions
export { returnChallenge };
