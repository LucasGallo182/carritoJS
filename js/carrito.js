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
    let componentes_carrito = cargarComponentesAlCarrito();
    const posicion_en_carrito = componentes_carrito.findIndex(elemento => elemento.id == id);

    //seteo la cantidad en 1 si no existe el componente ya agregado (-1 se pone cuando no existe)
    if (posicion_en_carrito === -1){
        const componente = buscarComponente(id);
        componente.cantidad = 1;
        componentes_carrito.push(componente);
    } else {
        //si ya fue agregado le sumo uno
        componentes_carrito[posicion_en_carrito].cantidad += 1;
    }

    localStorage.setItem("carrito", JSON.stringify(componentes_carrito));
    actualizarBotonCarrito();
    cargarComponentesSeleccionadosAlCarrito();
    alertaAgregarAlCarrito();
}

//Remuevo toda la LocalStorage de carrito
function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    cargarComponentesSeleccionadosAlCarrito();
    //Llamo alerta
    alertaVaciarCarrito();
}

//Actualizo badge con length
function actualizarBotonCarrito() {
    let componentes_carrito = cargarComponentesAlCarrito();
    let contenido = `<div class="cart-png-content">
        <img src="./img/shopping-cart-icon3.png" class="cart-icon" id="cart-icon">
        <span class="bagde-cart-icon">${componentes_carrito.length}</span>
    </div>`
    document.querySelector('.boton-carrito').innerHTML = contenido;
    cargarComponentesSeleccionadosAlCarrito();
}

//Sumo una cantidad al carrito
function agregarComponente(id){
    let componentes_carrito = cargarComponentesAlCarrito();
    const posicion_en_carrito = componentes_carrito.findIndex(elemento => elemento.id == id);
    componentes_carrito[posicion_en_carrito].cantidad += 1;
    localStorage.setItem("carrito", JSON.stringify(componentes_carrito));
    actualizarBotonCarrito();
    cargarComponentesSeleccionadosAlCarrito();
}

//Elimino de a un componente buscandolo por id
function eliminarComponente(id){
    let componentes_carrito = cargarComponentesAlCarrito();
    const posicion_en_carrito = componentes_carrito.findIndex(elemento => elemento.id == id);
    componentes_carrito[posicion_en_carrito].cantidad -= 1;

    if (componentes_carrito[posicion_en_carrito].cantidad == 0) {
        componentes_carrito = componentes_carrito.filter(x => x.id != id);
    }

    localStorage.setItem("carrito", JSON.stringify(componentes_carrito));
    actualizarBotonCarrito();
    cargarComponentesSeleccionadosAlCarrito();
    alertaEliminarComponenteCarrito();
}

//Pegar carrito de LS a HTML
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
                <div class="cart-cantidades">
                    <i class='bx bxs-plus-square cart-plus-less' onclick='agregarAlCarrito(${componente.id});'></i>
                    <input type="text" value="${componente.cantidad}" min="0" class="cart-quantity">
                    <i class='bx bxs-minus-square cart-plus-less' onclick='eliminarComponente(${componente.id});'></i>
                </div>
            </div>
            <!-- Vaciar Carrito -->
            <i class='bx bxs-trash cart-remove' onclick='eliminarComponente(${componente.id});'></i>
        </div>
        `;
        total += componente.precio * componente.cantidad;
    }

    document.querySelector(".cart-content").innerHTML = contenidoCarritoHTML;
    document.querySelector(".total-price").innerHTML = `$${total}`;
}
