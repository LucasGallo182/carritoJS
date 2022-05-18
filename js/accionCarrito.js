//Abre o Cierra Carrito
let DivBtnCarrito = document.querySelector('.boton-carrito');
let btnCerrarCarrito = document.querySelector('#close-cart')
let divCarrito = document.querySelector('.cart');
//Abre Carrito
DivBtnCarrito.onclick = () => {
    divCarrito.classList.add("active");
}
//Abre Carrito
btnCerrarCarrito.onclick = () => {
    divCarrito.classList.remove("active");
}