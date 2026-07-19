id="nhgn31"
/* ==========================================
   WDD 131 - Country Page

========================================== */

// Footer Dates

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;


// Static Weather Values

const temperature = 8;      // Celsius
const windSpeed = 10;       // km/h


// Wind Chill Formula (Metric)

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}


// Wind Chill Output

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {

    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;

} else {

    windChill.textContent = "N/A";

}