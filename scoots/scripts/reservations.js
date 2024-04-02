// Array of country names
const countries = [
    "Argentina",
    "Australia",
    "Austria",
    "Belarus",
    "Belgium",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Guatemala",
    "Hungary",
    "Iceland",
    "India",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Korea, South",
    "Mexico",
    "Netherlands",
    "New Zealand",
    "Norway",
    "Paraguay",
    "Peru",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "Singapore",
    "South Africa",
    "Spain",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Thailand",
    "United Kingdom",
    "United States",
];

// Function to populate the dropdown
function populateCountryDropdown() {
    const dropdown = document.getElementById("countryDropdown");

    // Clear existing options
    dropdown.innerHTML = "";

    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.text = "Select Country";
    defaultOption.value = "";
    dropdown.add(defaultOption);

    // Add country options
    countries.forEach((country) => {
        const option = document.createElement("option");
        option.text = country;
        option.value = country;
        dropdown.add(option);
    });
}
// Call the function
populateCountryDropdown();
