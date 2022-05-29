function alertaVaciarCarrito() {
    Toastify({
        text: "El carrito ha sido vaciado",
        duration: 1500,
        style: {
            background: "#ffc107",
        }
        }).showToast();
}

function alertaAgregarAlCarrito(){
    Toastify({
        text: "El componente ha sido agregado",
        duration: 1500,
        style: {
            background: "#00dc85",
        }
        }).showToast();
}

function alertaEliminarComponenteCarrito(){
    Toastify({
        text: "El componente ha sido eliminado",
        duration: 1500,
        style: {
            background: "#DF3731",
        }
        }).showToast();
}