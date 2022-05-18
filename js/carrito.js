//Buscar componente (para que me devuelva por id), luego me devuelve el objeto
function buscarComponente(id) {
    let componentes = cargarComponentesDesdeLS();
    return componentes.find(x => x.id == id);
}

//Cargo componentes al carrito y recupero el array carrito
function cargarComponentesAlCarrito() {
    if (localStorage.getItem("carrito")){
        return JSON.parse(localStorage.getItem("carrito"));
    }
    return [];
}

//Voy pasando por ID para agregarlo al array carrito y se lo paso a buscarComponente
function agregarAlCarrito(id) {
    let componente = buscarComponente(id);
    let componentes_carrito = cargarComponentesAlCarrito();
    componentes_carrito.push(componente);
    localStorage.setItem("carrito", JSON.stringify(componentes_carrito));
    actualizarBotonCarrito();
}

//Remuevo toda la LocalStorage de carrito
function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
}

//Actualizo badge con length
function actualizarBotonCarrito() {
    let componentes_carrito = cargarComponentesAlCarrito();
    let contenido = `
    <img src="./img/shopping-cart-icon.png" class="cart-icon" id="cart-icon">
    <span class="bagde-cart-icon">${componentes_carrito.length}</span>
    `
    document.querySelector('.boton-carrito').innerHTML = contenido;
    cargarComponentesSeleccionadosAlCarrito();
} 

function cargarComponentesSeleccionadosAlCarrito() {
    let componentes = cargarComponentesAlCarrito();
    let contenidoCarritoHTML = "";
    let total = 0;

    //Recorro el array e inserto en HTML
    for (const componente of componentes){
        contenidoCarritoHTML += `
        <div class="cart-box">
            <img src="${componente.imagen}" alt="${componente.nombre}" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${componente.nombre}</div>
                <div class="cart-price">$${componente.precio}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <!-- Vaciar Carrito -->
            <i class='bx bxs-trash cart-remove'></i>
        </div>
        `;
        total += componente.precio;
    }

    document.querySelector(".cart-content").innerHTML = contenidoCarritoHTML;
    document.querySelector(".total-price").innerHTML = `$${total}`;
}