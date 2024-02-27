// ************ Create date and last modified date for the footer ************
// Display the copyright year
function getCopyrightYear() {
    const year = new Date().getFullYear();
    return `&copy; ${year}`;
}
document.getElementById("cYear").innerHTML = getCopyrightYear();

// Display the last modified date of the page
function getLastModified() {
    const lastModified = new Date(document.lastModified).toGMTString();
    return `Last Modified: ${lastModified}`;
}
document.getElementById("lastModified").innerHTML = getLastModified();

// ********* Hamburger Menu *********

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// ********* Check Password Validation *********
const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", () => {
    if (pass1.value != pass2.value) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        pass2.style.backgroundColor = "#fff0f3";
        pass2.value = "";
        pass2.focus();
    } else {
        message.style.display = "none";
        pass2.style.backgroundColor = "#fff";
        pass2.style.color = "#000";
    }
});

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
