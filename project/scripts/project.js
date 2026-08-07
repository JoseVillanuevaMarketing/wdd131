// ======================================
// Sky Mark Digital
// project.js
// ======================================

// ---------- Footer ----------

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// ---------- Mobile Menu ----------

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");

    });

}

// ======================================
// Featured Services
// ======================================

const services = [

    {
        title: "Social Media Marketing",
        category: "Marketing"
    },

    {
        title: "Website Design",
        category: "Web Design"
    },

    {
        title: "Graphic Design",
        category: "Design"
    },

    {
        title: "Facebook Ads",
        category: "Advertising"
    }

];

// ---------- Save Visit Counter ----------

let visits = Number(localStorage.getItem("visits")) || 0;

visits++;

localStorage.setItem("visits", visits);

// ======================================
// Optional Visit Message
// ======================================

const visitMessage = document.querySelector("#visit-message");

if (visitMessage) {

    if (visits === 1) {

        visitMessage.textContent =
        `Welcome! This is your first visit to Sky Mark Digital.`;

    } else {

        visitMessage.textContent =
        `Welcome back! You have visited this website ${visits} times.`;

    }

}

// ======================================
// Display Services
// ======================================

const servicesContainer = document.querySelector("#services-list");

function displayServices(serviceArray) {

    if (!servicesContainer) return;

    servicesContainer.innerHTML = "";

    serviceArray.forEach(service => {

        const article = document.createElement("article");

        article.classList.add("service-card");

        article.innerHTML = `

            <h3>${service.title}</h3>

            <p>${service.category}</p>

        `;

        servicesContainer.appendChild(article);

    });

}

displayServices(services);

// ======================================
// Filter Example
// ======================================

function showMarketingServices() {

    const marketing = services.filter(service =>

        service.category === "Marketing"

    );

    displayServices(marketing);

}

// ======================================
// Button Event (Optional)
// ======================================

const marketingButton = document.querySelector("#marketingBtn");

if (marketingButton) {

    marketingButton.addEventListener("click", showMarketingServices);

}