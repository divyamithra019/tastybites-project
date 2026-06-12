document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".menu-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "";
        });
    });

});