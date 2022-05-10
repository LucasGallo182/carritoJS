//Variables
const divCarrito = document.querySelector('#divItemCartContainer'); //querySelector se puede usar con class o #Id (el primero que encuentra de Id)
const listaComponentes = document.querySelector('#contenedor-productos');
const tableCarrito = document.querySelector('#listaCarrito tbody');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
let carrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Agregar componente cuando presiono boton
    listaComponentes.addEventListener('click', agregarComponente);

    //Eliminar componentes del carrito
    divCarrito.addEventListener('click', eliminarComponente);

    //Vaciar todos los componentes del carrito
    vaciarCarrito.addEventListener('click', () =>{
        carrito = []; //vacio el arreglo carrito
        limpiarHTML(); //Se elimina todo el HTML con la funcion
    })
}

//Funciones
function agregarComponente(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregarCarrito')){
        const componenteSeleccionado = e.target.parentElement.parentElement.parentElement;
        leerComponentes(componenteSeleccionado);
    }
}

//Eliminar componentes del carrito
function eliminarComponente(e) {
    if(e.target.classList.contains('eliminarComponente')){
        const compId = e.target.getAttribute('data-id');

        //Eliminar del carrito (array) por data-id
        carrito = carrito.filter(componente => componente.id !== compId);
        carritoHTML(); //Volvemos a mostrar el carrito HTML (actualizamos)
    }
}

//Leer el contenido y ve que componente es
function leerComponentes(componente) {

    //Objeto con el contenido del componente
    const infoComponente = {
        imagen: componente.querySelector('img').src,
        titulo: componente.querySelector('h5').textContent,
        precio: Number(componente.querySelector('strong').textContent),
        id: componente.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe (para ver cantidad)
    const yaExiste = carrito.some(componente => componente.id === infoComponente.id); //el some verifica si en un arreglo ya existe el objeto
    if(yaExiste) {
        //Actualizamos cantidad
        const componentes = carrito.map(componente =>{ //Me crea un nuevo arreglo el map
            if(componente.id === infoComponente.id){ //cuando el componente ya agregado al carrito sea igual que el que intentamos agregar
                componente.cantidad++;
                return componente; //retorna objeto actualizado
            } else {
                return componente; //retorna objetos que no son duplicados
            }
        })
        carrito = [...componentes]; //...representan al spread operator transforma la variable carrito en una lista de argumentos (para ver la lista completa del array de map)
    } else {
        //Agregamos el componente nuevo
        carrito = [...carrito, infoComponente];
    }

    //LLamo a funcion para que muestre el HTML del carrito
    carritoHTML();
}

//Mostrar carrito en HTML
function carritoHTML() {

    //Limpiar HTML
    limpiarHTML();

    //Recorre el array y general HTML
    carrito.forEach(componente =>{
        let subtotal = componente.precio * componente.cantidad;
        let total = 0;
        total += subtotal;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>
            <img src="${componente.imagen}" class="iconCartSize">
        </td>
        <td>
            ${componente.titulo}
        </td>
        <td>
            <strong>$${componente.precio}</strong>
            Cant.: ${componente.cantidad}
            Sub-Total: $${subtotal}
        </td>
        <td>
            <button type="button" class="btn btn-danger btn-sm btnCart"><img src="./img/trash-icon.png" class="iconTrashSize eliminarComponente" data-id="${componente.id}"></button>
        </td>
        `
        //Agregar el HTML en el tbody
        tableCarrito.appendChild(tr);
    })
}

//Elimina los componentes del tbody que se repiten
function limpiarHTML() {
    //Si tiene al menos un elemento se sigue ejecutando, si se limpia el HTML ya no se ejecuta (eliminar elementos hijos)
    while(tableCarrito.firstChild){
        tableCarrito.removeChild(tableCarrito.firstChild)
    }
}

