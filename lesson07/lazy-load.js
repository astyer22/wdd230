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