// Modal
const btn = document.getElementById("btnInfo");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

btn.addEventListener("click", function () {
    modal.style.display = "flex";
});

cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});

// Sidebar
const btnMenu = document.getElementById("btnMenu");
const sidebar = document.getElementById("sidebar");

btnMenu.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});