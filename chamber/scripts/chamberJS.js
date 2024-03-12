if (window.location.pathname === "/wdd230/chamber/index.html") {
    getCopyrightYear();
    getLastModified();
}
if (window.location.pathname === "/wdd230/chamber/directory.html") {
    getCopyrightYear();
    getLastModified();
}

if (window.location.pathname === "/wdd230/chamber/discovery.html") {
    getCopyrightYear();
    getLastModified();
    // Call the function to update the page visits counter
    updatePageVisitsCounter();
}
if (window.location.pathname === "/wdd230/chamber/join.html") {
    getCopyrightYear();
    getLastModified();
}
// console.log("Path: " + window.location.pathname);

// Display the copyright year
function getCopyrightYear() {
    const year = new Date().getFullYear();
    document.getElementById("cYear").innerHTML = `&copy; ${year}`;
}

// Display the last modified date of the page
function getLastModified() {
    const lastModified = new Date(document.lastModified).toGMTString();
    document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;
}

// Toggle Dark/Light Mode
function screenMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");

    const sections = document.querySelectorAll("div.info, div.spotlights, div.event, article.card, div.weather-info, div.form-wrapper");
    sections.forEach((section) => {
        section.classList.toggle("dark-mode");
    });
}

// ********* Page Visits Counter *********
function updatePageVisitsCounter() {
    const msToDays = 84600000;
    let lastVisit = window.localStorage.getItem("numDiscoverPage");
    const visitsDisplay = document.querySelector(".latest-visit");

    // Calculate the time difference between visits
    var currentTime = new Date();
    var previousVisit = new Date(lastVisit);
    var timeDifference = currentTime.getTime() - previousVisit.getTime();
    var daysDifference = timeDifference / msToDays;

    // Display message based on time difference
    if (lastVisit != null) {
        if (daysDifference > 0 && daysDifference < 1) {
            visitsDisplay.textContent = `Back so soon! Awesome!`;
        } else if (Math.floor(daysDifference) === 1) {
            visitsDisplay.textContent = `You last visited 1 day ago.`;
        } else {
            visitsDisplay.textContent = `You last visited ${Math.floor(daysDifference)} days ago.`;
        }
    } else {
        visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
    }
    // store the new visit count total into localStorage
    localStorage.setItem("numDiscoverPage", new Date());

    // console.log("Current Time: " + currentTime);
    // console.log("Previous Visit: " + previousVisit);
    // console.log("Time Difference: " + timeDifference);
    // console.log("Days Difference: " + daysDifference);
}

function testUpdatePageVisitsCounter() {
    // Set a fake previous visit date for testing purposes
    const fakePreviousVisitDate = new Date("2024-02-22T22:33:34");
    window.localStorage.setItem("numDiscoverPage", fakePreviousVisitDate);

    // Call the updatePageVisitsCounter function
    updatePageVisitsCounter();

    // Check if the message displayed matches the expected message
    const message1 = "Welcome! Let us know if you have any questions.";
    const message2 = "Back so soon! Awesome!";
    const message3 = "You last visited 1 day ago.";
    const message4 = "You last visited 2 days ago.";

    const expectedMessage = message4;
    const displayedMessage = document.querySelector(".latest-visit").textContent;
    if (displayedMessage === expectedMessage) {
        console.log("Test passed: Page visits counter updated correctly.");
    } else {
        console.error("Test failed: Page visits counter not updated correctly.");
        console.error("Expected message:", expectedMessage);
        console.error("Displayed message:", displayedMessage);
    }

    // Clean up: remove the fake previous visit date from localStorage
    window.localStorage.removeItem("numDiscoverPage");
}
// Call the test function to test the updatePageVisitsCounter function
// testUpdatePageVisitsCounter();

// ********* Banner *********
document.addEventListener("DOMContentLoaded", function initBanner() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");

    // Check if today is Monday, Tuesday, or Wednesday
    var today = new Date();
    var dayOfWeek = today.getDay();
    // var dayOfWeek = 1; // for testing purposes
    var isBannerVisible = dayOfWeek >= 1 && dayOfWeek <= 3;

    // Set initial visibility
    banner.classList.toggle("banner", isBannerVisible);
    banner.classList.toggle("banner-hide", !isBannerVisible);

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function () {
        banner.classList.add("banner-hide");
    });
});
