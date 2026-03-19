// Cargar carrito desde localStorage o crear uno vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Agregar producto al carrito
function agregarProducto(nombre, precio) {
    let producto = { nombre: nombre, precio: precio };
    carrito.push(producto);

    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarContador();
}

// Actualiza el icono del carrito en el menú
function actualizarContador() {
    let contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = carrito.length;
    }
}

actualizarContador();

// Mostrar productos en carrito.html
function mostrarCarrito() {
    let lista = document.getElementById("listaCarrito");
    let total = 0;

    if (lista) {
        lista.innerHTML = "";
        for (let i = 0; i < carrito.length; i++) {
            let item = document.createElement("li");
            item.textContent = carrito[i].nombre + " - $" + carrito[i].precio.toLocaleString();
            lista.appendChild(item);
            total += carrito[i].precio;
        }

        document.getElementById("total").textContent = total.toLocaleString();
    }
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    actualizarContador();
}

// Mostrar carrito al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);