// Get current review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase count by one
reviewCount++;

// Save updated count
localStorage.setItem("reviewCount", reviewCount);

// Display count on the page
document.querySelector("#reviewCount").textContent = reviewCount;

// Footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;