function lookAtDate(currentTime) {
    // Have a variable for the last date
    let lastDate;

    // Check if the user does have a last data if they dont make one and return true
    if (localStorage.getItem("lastDate")) {
        lastDate = localStorage.getItem("lastDate");
    } else {
        localStorage.setItem("lastDate", currentTime)
        return true;
    }

    // Checks if it has been more than one day because epoch time is in milliseconds and 86,400,000 milliseconds is one day
    if (currentTime - lastDate >= 86400000) {
        // If so then set the 'lastDate' key to the current date and return true
        localStorage.setItem('lastDate', currentTime);
        return true;
    } else {
        // return false if not
        return false;
    }
}

// Export the function
export { lookAtDate };
