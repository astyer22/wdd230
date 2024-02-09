const navigation = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

// Initially hide the hamburger button
hamButton.style.display = 'none';

function updateNavigationVisibility() {
    // Check if the viewport width is less than a certain threshold (e.g., 785 pixels for mobile)
    const isMobileMode = window.innerWidth < 785;

    // Update the navigation visibility based on whether the page is in mobile mode
    if (isMobileMode) {
        navigation.style.display = 'none'; // Hide navigation in mobile mode
        hamButton.style.display = 'block'; // Show hamburger button in mobile mode
    } else {
        navigation.style.display = 'flex'; // Show navigation in non-mobile mode
        hamButton.style.display = 'none'; // Hide hamburger button in non-mobile mode
    }
}

// Add a resize event listener to update navigation visibility on window resize
window.addEventListener('resize', updateNavigationVisibility);

// Add a click event listener to the hamburger button
hamButton.addEventListener('click', () => {
    // Check if the viewport width is less than a certain threshold (e.g., 785 pixels for mobile)
    const isMobileMode = window.innerWidth < 785;

    // Toggle the 'show' class on the navigation element only if it's in mobile view
    if (isMobileMode) {
        navigation.classList.toggle('show');
        
    }

    // Toggle the 'open' class on the hamburger button element
    hamButton.classList.toggle('show');
    
});

// Initial call to set navigation visibility based on the initial viewport width
updateNavigationVisibility();
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
    document.getElementById("lastModified").innerText = "Last Modified:" + formattedLastModified;
});
