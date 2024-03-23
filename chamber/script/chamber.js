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




// calander js

document.addEventListener("DOMContentLoaded", function () {
    const calendarDiv = document.getElementById("calendar");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Get current month index (0-11)
    const currentYear = currentDate.getFullYear(); // Get current year
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Get index of the first day of the month (0-6)

    // Get total number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Calculate total number of days to display including days from previous and next month
    const totalDaysToDisplay = daysInMonth + firstDayOfMonth;

    // Calculate total number of rows needed to display all days in a perfect square
    const totalRows = Math.ceil(totalDaysToDisplay / 7);

    // Function to generate calendar
    function generateCalendar() {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Display current month and year
        const monthYearHeader = document.createElement("h3");
        monthYearHeader.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}`;
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

        let dayCounter = 1 - firstDayOfMonth; // Counter for days in the current month

        // Loop through each row
        for (let row = 0; row < totalRows; row++) {
            const weekRow = document.createElement("div");
            weekRow.classList.add("week");

            // Loop through each day of the week
            for (let col = 0; col < 7; col++) {
                const dayDiv = document.createElement("div");
                dayDiv.classList.add("day");

                // Calculate the day number to display
                const dayNumber = dayCounter + (row * 7) + col;

                if (dayNumber > 0 && dayNumber <= daysInMonth) {
                    dayDiv.textContent = dayNumber;

                    // Highlight current date
                    if (dayNumber === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
                        dayDiv.classList.add("current-day");
                    }
                } else {
                    dayDiv.classList.add("inactive-day");
                }

                // Check if the day is Wednesday
                const dayOfWeek = (col + 1) % 7; // Adjust the index to start from Sunday
                if (dayOfWeek === 3) { // Wednesday
                    dayDiv.classList.add("meeting-day");
                }

                weekRow.appendChild(dayDiv);
            }

            calendarDiv.appendChild(weekRow);
        }
    }

    generateCalendar();
});





