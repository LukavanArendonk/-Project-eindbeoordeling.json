const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function() {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});



const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        nav.classList.remove("active");
        menuButton.textContent = "☰";

    });

});

