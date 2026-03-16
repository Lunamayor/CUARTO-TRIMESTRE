const btn = document.getElementById("btnInfo");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

btn.onclick = function() {
    modal.style.display = "flex";
}

cerrar.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

