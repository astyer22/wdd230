// HamButton Script

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Hide the navigation initially
navigation.style.display = 'none';

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('open');

    // Toggle the visibility of the navigation
    if (navigation.style.display === 'none') {
        navigation.style.display = 'flex'; // or 'block' depending on your layout
    } else {
        navigation.style.display = 'none';
    }
});

// Current Date Script

document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    let currentYear = new Date().getFullYear();

    // Get the last modified date of the document
    let lastModifiedDate = new Date(document.lastModified);

    // Format the last modified date as desired (e.g., using toLocaleString())
    let formattedLastModified = lastModifiedDate.toLocaleString();

    // Dynamically populate the footer content
    document.getElementById("year").innerText = currentYear;
    document.getElementById("lastModified").innerText = "Last Modified: " + formattedLastModified;
});
