// Hamburger Button

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


// Add a click event listener to the hamButton
hamButton.addEventListener('click', () => {
    // Toggle the 'show' class on the navigation element
    navigation.classList.toggle('open');

    // Toggle the 'open' class on the hamButton element
    hamButton.classList.toggle('open');

});

// Dark mode

const switchButton = document.querySelector("#switch");
const main = document.querySelector("main");

switchButton.addEventListener("click", () => {
    if (switchButton.checked) {
        main.classList.add("dark-mode");
    } else {
        main.classList.remove("dark-mode");
    }
});



// windchill.js

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if inputs meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Return wind chill rounded to 2 decimal places
    } else {
        return "N/A"; // Return "N/A" if input values do not meet the requirements
    }
}

// Assume you have functions to get current temperature and wind speed from the page
var currentTemperature = parseFloat(document.getElementById("temperature").textContent); // Get current temperature
var currentWindSpeed = parseFloat(document.getElementById("windspeed").textContent); // Get current wind speed

// Calculate and display wind chill
var windChill = calculateWindChill(currentTemperature, currentWindSpeed);
document.getElementById("windchill").textContent = windChill;