// ************ Create date and last modified date for the footer ************
//toLocaleDateString
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const options2 = { weekday: "short", year: "numeric", month: "short", day: "numeric" };

const date = new Date();

// let modDate = date.toLocaleDateString("en-US", options2);
// document.getElementById("lastModified").innerHTML = `Last Modified: ${modDate}`;

let copyrightYear = date.getFullYear();
document.getElementById("cYear").innerHTML = `&copy; ${copyrightYear}`;

let lastModif = new Date(document.lastModified).toGMTString();
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModif}`;

// console.log(modDate);
// console.log(copyrightYear);

// ********* Hamburger Menu *********

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// ********* Page Visits Counter *********

let numVisits = Number(window.localStorage.getItem("numVisitsCounter")) || 0;
const visitsDisplay = document.querySelector(".visits");

// Determine if this is the first visit or display the number of visits.
if (numVisits === 0) {
    visitsDisplay.textContent = `Welcome! This is your first visit.`;
} else {
    visitsDisplay.textContent = numVisits + 1;
}

// store the new visit count total into localStorage
localStorage.setItem("numVisitsCounter", numVisits);
