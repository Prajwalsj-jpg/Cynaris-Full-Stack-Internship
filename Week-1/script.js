/* =====================================================
   WEEK-1 INTERNSHIP PORTFOLIO
   SCRIPT.JS
   ===================================================== */


/* ================= CHECK JAVASCRIPT ================= */

console.log("Portfolio JavaScript is working!");



/* ================= SMOOTH SCROLL ================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            const targetSection =
                document.querySelector(targetId);


            if (targetSection) {

                event.preventDefault();


                targetSection.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }

    });

});



/* ================= CARD CLICK EFFECT ================= */

const cards =
    document.querySelectorAll(".card");


cards.forEach(function(card) {

    card.addEventListener("click", function() {

        console.log("Card clicked!");

    });

});



/* ================= CURRENT YEAR ================= */

const footerText =
    document.querySelector("footer p");


if (footerText) {

    const currentYear =
        new Date().getFullYear();


    footerText.textContent =
        "© " +
        currentYear +
        " Prajwal S. Jambagi | Internship Portfolio";

}



/* ================= PAGE LOAD ================= */

window.addEventListener("load", function() {

    console.log(
        "Portfolio page loaded successfully!"
    );

});