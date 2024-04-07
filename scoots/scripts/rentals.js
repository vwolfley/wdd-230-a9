/* ****************************************************
    Rental Data and Details
***************************************************** */

const dataURL = "https://vwolfley.github.io/wdd230/scoots/data/rentals.json";

async function getRentalData() {
    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);
        displayRatesTable(data.rentals);
        displayRatesCards(data.rentals);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getRentalData();

const displayRatesTable = (rentals) => {
    // console.log(rentals);
    const priceTable = document.querySelector(".pricing tbody");

    rentals.forEach((type) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${type.type}</td>
            <td>${type.persons}</td>
            <td>$${type.reservation_full_day}</td>
            <td>$${type.reservation_half_day}</td>
            <td>$${type.walk_in_full_day}</td>
            <td>$${type.walk_in_half_day}</td>
        `;
        priceTable.appendChild(row);
    });
};

const displayRatesCards = (rentals) => {
    const priceCards = document.querySelectorAll(".rental-rides-info .card-body h3");

    priceCards.forEach((priceCard, index) => {
        const type = rentals[index];

            const cardInfo = document.createElement("div");

            cardInfo.innerHTML = `
            <p>Riders: ${type.persons}</p>
            <p>Full Day: $${type.reservation_full_day}</p>
            <p>Half Day: $${type.reservation_half_day}</p>
            <p>Walk-in Full Day: $${type.walk_in_full_day}</p>
            <p>Walk-in Half Day: $${type.walk_in_half_day}</p>
            `;
            priceCard.appendChild(cardInfo);
    });
};

