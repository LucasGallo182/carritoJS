function mostrarEnFinalizarCompra(){
    if(document.querySelector('.resumenCompra')){
        let componentes = cargarComponentesAlCarrito(); 
        let resumenCompra = document.querySelector('.resumenCompra');
        let divPedido = document.querySelector('#pedidoParaEnviar');
        let divPedidoHTML = "";
        let resumenCompraHTML = "";

        if(componentes.length == 0){
            resumenCompraHTML = `
            <div class="tablaMuestra">
                <p>No se encontraron productos seleccionados.</p>
            </div>`
            ;
            resumenCompra.innerHTML = resumenCompraHTML;
        } else {
            let total = 0;
            resumenCompraHTML = `
            <div class="tablaMuestra">
                <table class="tablaContenido">
                    <tr class="trTableMain">
                        <th>#</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>SubTotal</th>
                    </tr>
            `;

            for (const componente of componentes) {
                let subtotal = componente.precio * componente.cantidad;
                resumenCompraHTML += `
                <tr class="trTableItems">
                    <td><img src="${componente.imagen}" alt="${componente.nombre}" class="detalle-img"></td>
                    <td>${componente.nombre}</td>
                    <td>x${componente.cantidad}</td>
                    <td>$${componente.precio}</td>
                    <td>$${subtotal}</td>
                </tr>
                `;
                total += componente.precio * componente.cantidad;
                divPedidoHTML += `<ul>
                <li><input type="text" name="datosproducto" value=" ${componente.nombre} x${componente.cantidad}: $${subtotal}"></li>
                </ul>`;
            }

            resumenCompraHTML += `
            </table>
                <div class="total">
                    <div class="total-title">Total:</div>
                    <div class="total-price">$${total}</div>
                </div>
            </div>
            `;
            divPedidoHTML += `<input type="text" name="totalenvio" value="Total: $${total}">`;
            resumenCompra.innerHTML = resumenCompraHTML;
            divPedido.innerHTML = divPedidoHTML;
        }
    }
}

mostrarEnFinalizarCompra();