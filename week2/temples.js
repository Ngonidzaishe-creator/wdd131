document.addEventListener("DOMContentLoaded", function() {
    // Set current year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });
});
