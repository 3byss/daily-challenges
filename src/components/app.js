function getChallenge() {
    console.log("This is your challenge...");
}

function displayDots(element) {
    let numOfDots = 1;
    setInterval(() => {
        let dot = '.';
        element.textContent = `Click the button to get your challenge${dot.repeat(numOfDots)}`;
        numOfDots++;

        if (numOfDots > 3) {
            numOfDots = 1;
        }
    }, 800);
}

export { getChallenge, displayDots };