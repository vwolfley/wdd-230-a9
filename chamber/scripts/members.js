const baseURL = "https://vwolfley.github.io/wdd230/";
const dataURL = "https://vwolfley.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        // displayMembers(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getMembers();

const displayMembers = (members) => {
    // console.log(members);

    members.forEach((member) => {
        // // console.log(week);
        // const listItem = document.createElement("li");
        // const lessonWeek = document.createTextNode(`Lesson ${week.lesson}: `);

        // listItem.appendChild(lessonWeek);

        // week.links.forEach((link) => {
        //     // console.log(link);
        //     const tag = document.createElement("a");
        //     tag.setAttribute("href", link.url);
        //     tag.textContent = link.title;

        //     listItem.appendChild(tag);

        //     if (week.links.length > 1 && week.links.indexOf(link) < week.links.length - 1) {
        //         listItem.innerHTML += " | ";
        //     }
        // });
        // // console.log(listItem);

        // const list = document.querySelector(".la-card");
        // list.appendChild(listItem);
    });
};
