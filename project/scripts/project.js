// ======================================
// Sky Mark Digital
// project.js
// Author: Jose Villanueva
// ======================================

// ---------- Footer ----------

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ======================================
// Mobile Navigation
// ======================================

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");

    });

}

// ======================================
// Services Data
// ======================================

const services = [

    {
        title: "Social Media Marketing",
        category: "Marketing"
    },

    {
        title: "Facebook & Instagram Ads",
        category: "Advertising"
    },

    {
        title: "Website Design",
        category: "Web Design"
    },

    {
        title: "Brand Identity",
        category: "Design"
    }

];

// ======================================
// Display Services (Home)
// ======================================

const servicesContainer = document.querySelector("#services-list");

function displayServices(serviceArray) {

    if (!servicesContainer) return;

    servicesContainer.innerHTML = "";

    serviceArray.forEach(service => {

        const card = document.createElement("article");

        card.classList.add("service-card");

        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.category}</p>
        `;

        servicesContainer.appendChild(card);

    });

}

if (servicesContainer) {
    displayServices(services);
}

// ======================================
// Example Filter
// ======================================

function showMarketingServices() {

    const marketingServices = services.filter(service =>
        service.category === "Marketing"
    );

    displayServices(marketingServices);

}

const marketingButton = document.querySelector("#marketingBtn");

if (marketingButton) {

    marketingButton.addEventListener("click", showMarketingServices);

}

// ======================================
// Contact Form
// ======================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.querySelector("#name").value;

        localStorage.setItem("lastVisitor", name);

        alert(`Thank you ${name}! We will contact you soon.`);

        contactForm.reset();

    });

}

// ======================================
// Visit Counter (localStorage)
// ======================================

let visits = Number(localStorage.getItem("visits")) || 0;

visits++;

localStorage.setItem("visits", visits);

const visitMessage = document.querySelector("#visit-message");

if (visitMessage) {

    if (visits === 1) {

        visitMessage.textContent =
            "Welcome! This is your first visit.";

    } else {

        visitMessage.textContent =
            `Welcome back! You have visited this website ${visits} times.`;

    }

}
