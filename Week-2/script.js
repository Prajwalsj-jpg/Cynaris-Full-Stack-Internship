// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close mobile menu when a link is clicked

const links = document.querySelectorAll("#navLinks a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// Welcome button

const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {
    alert("Welcome to Prajwal S Jambagi's Week 2 Portfolio!");
});


// Project button

const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener("click", function () {
    alert("JavaScript is working successfully! Your Week 2 project is interactive.");
});


// Current year

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();