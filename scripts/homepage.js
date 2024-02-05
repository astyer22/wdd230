const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Initially hide the navigation
navigation.style.display = 'none';
hamButton.style.display = 'none';

function updateNavigationVisibility() {
    // Check if the viewport width is less than a certain threshold (e.g., 768 pixels for mobile)
    const isMobileMode = window.innerWidth < 768;

    // Update the navigation visibility based on whether the page is in mobile mode
    if (isMobileMode) {
        navigation.style.display = 'none'; // Show navigation in mobile mode
        hamButton.style.display = 'block'; // Show menu button in mobile mode
    } else {
        navigation.style.display = 'flex'; // Hide navigation in non-mobile mode
        hamButton.style.display = 'none'; // Hide menu button in non-mobile mode
    }
}

// Add a resize event listener to update navigation visibility on window resize
window.addEventListener('resize', updateNavigationVisibility);

// Add a click event listener to the hamButton
hamButton.addEventListener('click', () => {
    // Toggle the 'show' class on the navigation element
    navigation.classList.toggle('show');

    // Toggle the 'open' class on the hamButton element
    hamButton.classList.toggle('open');

    // Update the navigation visibility based on the current viewport width
    updateNavigationVisibility();
});

// Initial call to set navigation visibility based on the initial viewport width
updateNavigationVisibility();