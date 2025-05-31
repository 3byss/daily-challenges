function lookAtDate(currentDate) {
    // Get the last date shown
    let lastDate = localStorage.getItem("lastDate") ? localStorage.getItem("lastDate") : localStorage.setItem("lastDate", currentDate);

    // Checks if it has been more than one day
    if (currentDate - lastDate >= 86400000) {
        // If so then set the 'lastDate' key to the current date and return true
        localStorage.setItem("lastDate", currentDate);
        return true;
    } else {
        // return false if not
        return false;
    }
}

// Export the function
export { lookAtDate }