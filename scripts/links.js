const baseURL = "https://vwolfley.github.io/wdd230/";
const linksURL = "https://vwolfley.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(baseURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        // displayProphets(data.prophets);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

getLinks();
