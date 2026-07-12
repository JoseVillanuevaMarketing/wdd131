/* ===========================
   WDD 131 - Temple Album
=========================== */

// Select the menu button and navigation
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

// Toggle the navigation menu
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
        menuButton.setAttribute("aria-label", "Close Navigation Menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open Navigation Menu");
    }
});

// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Display the document's last modified date
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;