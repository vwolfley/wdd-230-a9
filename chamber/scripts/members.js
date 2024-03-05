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

// Toggle Dark/Light Mode
function screenMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");

    const sections = document.querySelectorAll("div.info, div.spotlights, div.event, article.card, div.weather-info, div.form-wrapper");
    sections.forEach((section) => {
        section.classList.toggle("dark-mode");
    });
}

/* ****************************************************
    Directory of Members
***************************************************** */
const baseURL = "https://vwolfley.github.io/wdd230/";
const dataURL = "https://vwolfley.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);
        displayMembers(data.members);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getMembers();

const displayMembers = (members) => {
    console.log(members);

    members.forEach((member) => {
        // // console.log(week);
        const bizCard = document.createElement("section");
        const companyName = document.createElement("h3");
        companyName.textContent = member.company;
        const address = document.createElement("p");
        const address2 = document.createElement("p");
        address.textContent = member.address;
        address2.textContent = `${member.city}, ${member.state} ${member.zip}`;
        const phone = document.createElement("p");
        phone.textContent = member.phone;
        const website = document.createElement("a");
        website.setAttribute("href", `https://${member.website}`);
        website.textContent = member.website;

        const logo = document.createElement("img");
        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `${member.company}-logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "75");
        logo.setAttribute("height", "auto");

        bizCard.appendChild(logo);
        bizCard.appendChild(companyName);
        bizCard.appendChild(address);
        bizCard.appendChild(address2);
        bizCard.appendChild(phone);
        bizCard.appendChild(website);

        // add the section card to the "cards" div
        cards.appendChild(bizCard);
    });
};

const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const display = document.querySelector("article");

gridBtn.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listBtn.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
