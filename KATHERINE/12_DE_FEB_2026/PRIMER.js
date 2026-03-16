function cambiarTexto() {
    document.getElementById("titulo").innerText = "¡Bienvenidos a mi sitio web! de Java script";
}

function cambiarColor() {
    document.body.classList.remove("dark-mode");
    document.body.classList.toggle("azul");
}

function modoOscuro() {
    document.body.classList.remove("azul");
    document.body.classList.toggle("dark-mode");
}

function cambiarimagen() {
    document.getElementById("imagen").src =
    "file:///C:/Users/SENA/Downloads/%E2%80%94Slidesdocs%E2%80%94fondo%20de%20textura%20con%20estampado_aa9a545e00.jpg";
}

function ocultarimagen() {
    document.getElementById("imagen").style.display = "none";
}

function mostrarimagen() {
    document.getElementById("imagen").style.display = "";
}
function cambiarfondo() {
    document.body.style.backgroundImage = "https://img1.wallspic.com/previews/4/8/0/7/4/147084/147084-fila-ambiente-azul-luz-morado-x750.jpg";
}

function mostrarmeme() {
   document.getElementById("imagen").src = "https://i.pinimg.com/736x/62/52/0a/62520af263f08e3274fba76d8e1547fd.jpg";
}

