function cargarComponentes() {
    let componentes = cargarComponentesDesdeLS();
    let contenidoHTML = "";

    //Recorro el array e inserto en HTML
    for (const componente of componentes){
        contenidoHTML += `
        <div class="producto-box">
            <img onclick="verComponente(${componente.id});" src="${componente.imagen}" alt="${componente.nombre}" class="product-img">
            <h2 class="product-title">${componente.nombre}</h2>
            <span class="price">$${componente.precio}</span>
            <a href="#" onclick="agregarAlCarrito(${componente.id});" class="add-cart">Agregar</a>
        </div>
        `;
    }

    document.querySelector(".shop-content").innerHTML = contenidoHTML;
}

//Llamo a las funciones
guardarComponentesLS(componentes);
cargarComponentes();
actualizarBotonCarrito();

document.querySelector('.btn-vaciar').addEventListener("click", eliminarCarrito);