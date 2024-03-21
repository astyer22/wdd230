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

// join button
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the document to be fully loaded before adding event listener
    const joinButton = document.getElementById("join");

    if (joinButton) {
        joinButton.addEventListener("click", function() {
            window.location.href = "https://astyer22.github.io/wdd230/chamber/join.html";
        });
    }
});

// Banner
document.addEventListener("DOMContentLoaded", function() {
    // Get the current day of the week
    const today = new Date().getDay();

    // Check if it's Monday, Thesday or Wednesday
    if (today >=1 && today < 3) {
        // Display Banner
        document.getElementById("banner").style.display = "block;"

        // Add event listener to the close button
        document.getElementById("closeBanner").addEventListener("click", function() {
            // Hide the baanner when the close button is clicked
            document.getElementById("banner").style.display = "none";
        })
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

// calander js

document.addEventListener("DOMContentLoaded", function () {
    const calendarDiv = document.getElementById("calendar");
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' }); // Get current month as string
    const currentYear = currentDate.getFullYear(); // Get current year

    // Function to generate calendar
    function generateCalendar() {
        const daysInMonth = 30; // Assuming 30 days for simplicity
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Display current month and year
        const monthYearHeader = document.createElement("h3");
        monthYearHeader.textContent = `${currentMonth} ${currentYear}`;
        calendarDiv.appendChild(monthYearHeader);

        // Display days of the week
        const weekRow = document.createElement("div");
        weekRow.classList.add("week");
        for (let day of daysOfWeek) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("day");
            dayDiv.textContent = day;
            weekRow.appendChild(dayDiv);
        }
        calendarDiv.appendChild(weekRow);

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("day");
            dayDiv.textContent = i;

            // Highlight current date
            if (i === currentDate.getDate()) {
                dayDiv.classList.add("current-day");
            }

            // Check if the day is Wednesday
            const dayOfWeek = new Date(currentYear, currentDate.getMonth(), i).getDay();
            if (dayOfWeek === 3) { // Wednesday
                dayDiv.classList.add("meeting-day");
            }

            dayDiv.addEventListener("click", function () {
                toggleEvent(dayDiv);
            });
            calendarDiv.appendChild(dayDiv);
        }
    }

    // Function to toggle event on a day
    function toggleEvent(dayDiv) {
        if (dayDiv.querySelector(".event")) {
            dayDiv.removeChild(dayDiv.querySelector(".event"));
        } else {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event");
            dayDiv.appendChild(eventDiv);
        }
    }

    generateCalendar();
});



// Assume you have functions to get current temperature and wind speed from the page
// var currentTemperature = parseFloat(document.getElementById("temperature").textContent); // Get current temperature
// var currentWindSpeed = parseFloat(document.getElementById("windspeed").textContent); // Get current wind speed

// // Calculate and display wind chill
// var windChill = calculateWindChill(currentTemperature, currentWindSpeed);
// document.getElementById("windchill").textContent = windChill;

// // Get the hidden input element
// var timestampInput = document.getElementById('timestamp');

// // Set its value to the current date/time in milliseconds
// timestampInput.value = Date.now();

// // Directory Page



