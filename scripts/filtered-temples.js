// ---------- Temple Data ----------

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-52983.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-37763.jpg"
  },
  {
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-49246.jpg"
  }
];

// ---------- DOM References ----------

const gallery = document.querySelector(".gallery");
const title = document.querySelector("#page-title");

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// ---------- Footer ----------

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// ---------- Hamburger Menu ----------

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// ---------- Create Temple Cards ----------

function displayTemples(templeList) {

    gallery.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("section");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;

        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);

    });

}

// ---------- Home ----------

displayTemples(temples);

// ---------- Navigation Filters ----------

document.querySelector("#home").addEventListener("click", () => {

    title.textContent = "Home";

    displayTemples(temples);

});

document.querySelector("#old").addEventListener("click", () => {

    title.textContent = "Old Temples";

    displayTemples(

        temples.filter(temple =>

            parseInt(temple.dedicated) < 1900

        )

    );

});

document.querySelector("#new").addEventListener("click", () => {

    title.textContent = "New Temples";

    displayTemples(

        temples.filter(temple =>

            parseInt(temple.dedicated) > 2000

        )

    );

});

document.querySelector("#large").addEventListener("click", () => {

    title.textContent = "Large Temples";

    displayTemples(

        temples.filter(temple =>

            temple.area > 90000

        )

    );

});

document.querySelector("#small").addEventListener("click", () => {

    title.textContent = "Small Temples";

    displayTemples(

        temples.filter(temple =>

            temple.area < 10000

        )

    );

});