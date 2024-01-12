//toLocaleDateString
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric"};
const options2 = { weekday: "short", year: "numeric", month: "short", day: "numeric"};

const date = new Date()

const modDate = date.toLocaleDateString("en-US", options2);
document.getElementById("lastModified").innerHTML = `Last Modified: ${modDate}`;

const copyrightYear = date.getFullYear();
document.getElementById("cYear").innerHTML = `&copy; ${copyrightYear}`;

// console.log(modDate);
// console.log(copyrightYear);