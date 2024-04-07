# ~Scoots~

## Company Description

~Scoots~ is a fictitious 🛵 motor scooter rental company located on the island of Cozumel off the coast of Mexico in the western Caribbean Sea. This owner-operator company caters to locals, walk-in tourists, motor scooter enthusiasts, and cruise-based touring groups and partnerships.

The company has two physical rental locations on Cozumel. One is near the Playa del Carmen-Cozumel Ferry dock in el Centro de Cozumel and the other is near the Terminal Puerta Maya further south along the coast which caters to the cruise lines and patrons. The company promotes friendly and easy to rent services of motor scooters, jeeps, and side-by-sides ATVs.

The overall goal of the website project is to promote the rental services for those customers that like to do their homework before getting to the island and to provide information about the services, requirements, and rental process. The website should reflect the fun and carefree attitude of the island and the ability to escape the touristy western part of the island by exploring the vast coasts and inlets on the southern and eastern shores.

## Rental Information

### Types of Rentals

-   Honda Motor Scooters
    -   Honda Metropolitan (49cc) - 1 person
    -   Honda Dio (110cc) - 2 person
    -   Honda PCX150 (149cc) - 2 person
-   Side-by-Side ATVs
    -   Honda Pioneer 1000 - 4 person
-   Jeeps
    -   Jeep Wrangler - 4 door manuel with A/C - 5 person
    -   Jeep Wrangler - 2 door - open air - manuel - 4 person

### Rental Services and Agreements

-   A $50 security deposit is required to confirm reservations.
-   A valid drivers license is required in hand at the time of rental.
-   No one under the age of 12 years of age are allowed to ride on the scooters.
-   Fuel charge is not included.
-   Unlimited mileage.
-   Liability insurance is included.
-   Damage insurance is available for purchase.
-   Free delivery to Cozumel hotels or Airbnbs for 2+ day rentals.
-   Payment via Google Pay, Apple Pay, cash, credit card, debit card, or venmo.
-   Rentals may be returned to either physical location.

### Pricing

| **Max Rental Pricing**          |
| ------------------------------- | ---------------- | ----------------------- | ------------ | ----------------------- | ------------ |
|                                 | **Reservation**  | **Walk-In**             |
| **Rental Type**                 | **Max. Persons** | **Half Day<br>(3 hrs)** | **Full Day** | **Half Day<br>(3 hrs)** | **Full Day** |
| ~Honda Metro Scooter            | 1                | $20                     | $30          | $25                     | $35          |
| ~Honda Dio Scooter              | 2                | $30                     | $40          | $35                     | $45          |
| ~Honda PCX150 Scooter           | 2                | $40                     | $50          | $45                     | $55          |
| Honda Pioneer ATV               | 4                | $50                     | $70          | $60                     | $80          |
| Jeep Wrangler - 4 door with a/c | 5                | $70                     | $100         | $85                     | $125         |
| Jeep Wrangler - 2 door          | 4                | $60                     | $85          | $70                     | $90          |

## Site Specifications

### Home Page

📄 The Home page is a contemporary, exciting landing page providing images of the island and rental facilities and must include the following:

-   A call to action to make a rental reservation.
-   Readily available navigation and contact information.
-   Summary information about all the types of rentals.
-   Social media links (a general link is OK)
-   Weather information from the free version of openweathermap.org. Here is the minimum information to include on the page:
    ✔️ The current temperature
    ✔️ The current humidity
    ✔️ The next day's forecasted temperature at 15:00 (3:00pm).
    ✔️ All the weather data points provided including the main (which is the title, e.g., "Clouds"), the description, and the associated weather icon.
    There may likely only be one data point under weather but your code should display any and all if provided by the API.
-   Include a closeable message at the very top of the page that provides the high temperature temp-max for the current day.

### Rentals Page

The Rentals page describes the available rental options and prices with images.

-   The prices displayed on the site must be obtained from a JSON data source of your own making.
-   Store this .json file in a data 📁 folder in this project folder.
-   Incorporate a data table in your HTML structure to display some portion of this information.

### Reservations Page

📄 The Reservations page that contains:

-   rental agreement information, and
-   a valid form that collects rental details such as the date, period, rental type, number, phone number, name, email, home state or country, cruise line if applicable, and special accommodations/comments such as the need and location of a drop-off request.
-   Use CSS Grid and/or CSS Flex to design the layout.

### Contact Page

The Contact page will contain:

-   essential contact information,
-   an embedded Google map showing the two locations on Cozumel, and
-   a basic contact us form with name, email, and comment.
