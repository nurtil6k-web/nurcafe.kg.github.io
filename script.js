/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* Закрываем мобильное меню после нажатия */

document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* =========================================
   HEADER ON SCROLL
========================================= */

const header = document.getElementById("header");

function checkHeader() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", checkHeader);

checkHeader();


/* =========================================
   MENU FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        menuCards.forEach((card) => {

            const categories = card.dataset.category.split(" ");

            if (filter === "all" || categories.includes(filter)) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 20);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(15px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 250);

            }

        });

    });

});


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-image, .about-content, .menu-card, .gallery-item, .contacts-content, .map-box"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   SMOOTH APPEARANCE FOR MENU CARDS
========================================= */

menuCards.forEach((card) => {

    card.style.transition =
        "opacity 0.25s ease, transform 0.25s ease, box-shadow 0.35s ease";

});


/* =========================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", (event) => {

    const clickedInsideNav = nav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
        nav.classList.remove("active");
    }

});