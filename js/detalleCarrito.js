function actualizarBotonCarrito() {
    let componentes_carrito2 = cargarComponentesAlCarrito();
    let contenido2 = `<div class="cart-png-content">
        <img src="./img/shopping-cart-icon3.png" class="cart-icon" id="cart-icon">
        <span class="bagde-cart-icon">${componentes_carrito2.length}</span>
    </div>`
    document.querySelector('.boton-carrito2').innerHTML = contenido2;
    cargarComponentesSeleccionadosAlCarrito();
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

    document.querySelector(".cart-content2").innerHTML = contenidoCarritoHTML;
    document.querySelector(".total-price").innerHTML = `$${total}`;
}

actualizarBotonCarrito();
cargarComponentesSeleccionadosAlCarrito();


//Abre o Cierra Carrito
let DivBtnCarrito2 = document.querySelector('#cart-icon');
let btnCerrarCarrito2 = document.querySelector('#close-cart')
//Abre Carrito
DivBtnCarrito2.onclick = () => {
    document.querySelector('.cart2').classList.add("active");
}
//Abre Carrito
btnCerrarCarrito2.onclick = () => {
    document.querySelector('.cart2').classList.remove("active");
}

//Remuevo toda la LocalStorage de carrito
function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    cargarComponentesSeleccionadosAlCarrito();
    //Llamo alerta
    alertaVaciarCarrito();
}

document.querySelector('.btn-vaciar').addEventListener("click", eliminarCarrito);

function detalleComponente() {
    let id = localStorage.getItem("ver_componente");
    let componente = buscarComponente(id);
    let divDetallesBox = document.querySelector(".detalles-box");
    let divDetallesJuegos = document.querySelector(".detalles-juegos");
    contenidoDetalleHTML = "";
    contenidoDetalleJuegosHTML = "";
    
    contenidoDetalleHTML += `
    <img src="${componente.imagen}" alt="${componente.nombre}" class="img-detalles">
    <div class="componente-detalles-box">
        <h3 class="detalle-titulo">${componente.nombre}</h3>
        <h4>Descripción:</h4>
        <ul>
        ${componente.detalles}
        </ul>
        <h5 class="text-green">Hay Stock</h5>
        <div class="botones-detalle">
            <a href="./index.html" class="btn-volver">Volver</a>
            <a href="#" onclick="agregarAlCarrito(${componente.id}); location.reload();" class="btn-agregar-detalle">Agregar</a>
        </div>
    <div class="precio-detalle">
        <h4 class="precio-detalle-style">$${componente.precio}</h4>
    </div>
    </div>
        `;
    divDetallesBox.innerHTML = contenidoDetalleHTML;

    if (componente.tipo == 1) {
        let urlFetch = '../api/juegoslow.json';
        fetch(urlFetch)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(valor => {
                contenidoDetalleJuegosHTML += `
                        <div class="div-detalle-juegos">
                            <div class="div-juego">
                                <img src="${valor.imagen}" alt="" class="img-juego-detalle">
                                <p class="p-juego-detalle">${valor.nombre}</p>
                            </div>
                        </div>`;
                divDetallesJuegos.innerHTML = contenidoDetalleJuegosHTML;
            })
        })
    } else if (componente.tipo == 2) {
        let urlFetch = '../api/juegosmedium.json';
        fetch(urlFetch)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(valor => {
                contenidoDetalleJuegosHTML += `
                        <div class="div-detalle-juegos">
                            <div class="div-juego">
                                <img src="${valor.imagen}" alt="" class="img-juego-detalle">
                                <p class="p-juego-detalle">${valor.nombre}</p>
                            </div>
                        </div>`;
                divDetallesJuegos.innerHTML = contenidoDetalleJuegosHTML;
            })
        })
    } else {
        let urlFetch = '../api/juegoshigh.json';
        fetch(urlFetch)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(valor => {
                contenidoDetalleJuegosHTML += `
                        <div class="div-detalle-juegos">
                            <div class="div-juego">
                                <img src="${valor.imagen}" alt="" class="img-juego-detalle">
                                <p class="p-juego-detalle">${valor.nombre}</p>
                            </div>
                        </div>`;
                divDetallesJuegos.innerHTML = contenidoDetalleJuegosHTML;
            })
        })
    }
}

detalleComponente();