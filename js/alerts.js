function alertaVaciarCarrito() {
<<<<<<< HEAD
    Swal.fire({
        position: 'bottom-end',
        text: `El carrito ha sido vaciado`,
        color: 'black',
        background: '#ffc107',
        showConfirmButton: false,
        width: '21vw',
        timer: 1500
    })
}

function alertaAgregarAlCarrito(){
    Swal.fire({
        position: 'bottom-end',
        text: `El componente ha sido agregado`,
        color: 'black',
        background: '#00dc85',
        showConfirmButton: false,
        width: '21vw',
        timer: 1500
    })
}

function alertaEliminarComponenteCarrito(){
    Swal.fire({
        position: 'bottom-end',
        text: `El componente ha sido eliminado`,
        color: 'black',
        background: '#DF3731',
        showConfirmButton: false,
        width: '21vw',
        timer: 1500
    })
=======
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
>>>>>>> carritojs
}