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
