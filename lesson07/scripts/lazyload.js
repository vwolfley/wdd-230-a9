/**
 * Updates the copyright year and last modified date on the webpage.
 * @returns {void}
 */
function updatePageInfo() {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const options2 = { weekday: "short", year: "numeric", month: "short", day: "numeric" };

    const date = new Date();

    let copyrightYear = date.getFullYear();
    document.getElementById("cYear").innerHTML = `&copy; ${copyrightYear}`;

    let lastModif = new Date(document.lastModified).toLocaleDateString("en-US", options2);
    document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModif}`;
}

// Call the function to update page info when needed
updatePageInfo();
