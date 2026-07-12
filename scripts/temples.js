// Temple Album - WDD 131

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

// Toggle the navigation menu when the button is clicked
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    // Change the menu icon
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

// Get the current date
const today = new Date();

// Display the current year
document.getElementById("currentyear").textContent = today.getFullYear();

// Display the document's last modified date
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;