const navbar = document.querySelector(".navbar");
const navToggle = document.getElementById("navToggle");
const navSidebar = document.getElementById("navSidebar");
const navOverlay = document.getElementById("navOverlay");

/* ===== SCROLL NAVBAR ===== */
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* ===== OPEN SIDEBAR ===== */
navToggle.addEventListener("click", () => {
    navSidebar.classList.add("active");
    navOverlay.classList.add("active");
});

/* ===== CLOSE SIDEBAR ===== */
navOverlay.addEventListener("click", closeMenu);
document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

function closeMenu() {
    navSidebar.classList.remove("active");
    navOverlay.classList.remove("active");
}
