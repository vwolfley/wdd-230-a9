// javaScript for the BOM lesson bom.html

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

//First Attempt
// button.addEventListener("click", () => {
//     if (input.value != "") {
//         let listItem = document.createElement("li");
//         //call function to capitalize first letter of input value
//         listItem.textContent = capitalizeWords(input.value.trim());

//         // create delete button to append to list item
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "❌";
//         listItem.append(deleteButton);

//         list.append(listItem);
//         input.value = "";
//         input.focus();

//         deleteButton.addEventListener("click", () => {
//             list.removeChild(listItem);
//             input.focus();
//         });
//     } else {
//         alert("You must enter a chapter name");
//         input.focus();
//         return;
//     }
// });

button.addEventListener("click", addBookOfMormon);

function addBookOfMormon() {
    if (input.value != "") {
        let listItem = document.createElement("li");
        //call function to capitalize first letter of input value
        listItem.textContent = capitalizeWords(input.value.trim());

        // create delete button to append to list item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        listItem.append(deleteButton);

        list.append(listItem);
        input.value = "";
        input.focus();

        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
            input.focus();
        });
    } else {
        alert("You must enter a chapter name");
        input.focus();
        return;
    }
}

// function to capitalize first letter of input value
function capitalizeFirstLetter(string) {
    // Ensure input string is converted to lowercase first
    string = string.toLowerCase();
    // Capitalize the first letter and concatenate it with the rest of the string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeWords(string) {
    // Split the string by whitespace characters
    const words = string.split(/\s+/);

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
        // Capitalize the first letter of the word
        const capitalizedFirstLetter = word.charAt(0).toUpperCase();
        // Keep the rest of the word unchanged
        const restOfWord = word.slice(1);
        // Return the capitalized word
        return capitalizedFirstLetter + restOfWord;
    });

    // Join the words back together with whitespace and return the result
    return capitalizedWords.join(" ");
}

const bookOfMormon = [
    {
        title: "1 Nephi",
        chapters: 22,
    },
    {
        title: "2 Nephi",
        chapters: 33,
    },
    {
        title: "Jacob",
        chapters: 7,
    },
    {
        title: "Enos",
        chapters: 1,
    },
    {
        title: "Jarom",
        chapters: 1,
    },
    {
        title: "Omni",
        chapters: 1,
    },
    {
        title: "Words of Mormon",
        chapters: 1,
    },
    {
        title: "Mosiah",
        chapters: 29,
    },
    {
        title: "Alma",
        chapters: 63,
    },
    {
        title: "Helaman",
        chapters: 16,
    },
    {
        title: "3 Nephi",
        chapters: 30,
    },
    {
        title: "4 Nephi",
        chapters: 1,
    },
    {
        title: "Mormon",
        chapters: 9,
    },
    {
        title: "Ether",
        chapters: 15,
    },
    {
        title: "Moroni",
        chapters: 10,
    },
];

function checkBookChapter(bookTitle, chapterNumber) {
    for (const book of bookOfMormon) {
        if (book.title === bookTitle) {
            if (chapterNumber >= 1 && chapterNumber <= book.chapters) {
                return `${book.title} ${chapterNumber}`;
            } else {
                return `${book.title} does not have this many chapters ${chapterNumber}`;
            }
        }
    }
    return `Book ${bookTitle} not found in the Book of Mormon`;
}
