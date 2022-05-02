class Saludar {
    constructor(usuario) {
        this._usuario = usuario;
    }
    saludarlo() {
        return `Hola ${this._usuario}, bienvenido a MallTop!`;
    }
}

//arrayCarritoVacio
const carrito = [];

const componentes = [{
        nombre: 'Mouse ASUS Tuf',
        precio: 3000
    },
    {
        nombre: 'Mouse Corsair K20',
        precio: 4000
    },
    {
        nombre: 'Auriculares Logitech G435',
        precio: 5000
    },
    {
        nombre: 'Auriculares Logitech G733',
        precio: 6000
    },
    {
        nombre: 'Teclado Corsair K55',
        precio: 5500
    },
    {
        nombre: 'Teclado HyperX Alloy',
        precio: 5200
    },
    {
        nombre: 'Gabinete Deepcool Mesh 55',
        precio: 8000
    },
    {
        nombre: 'Gabinete Phanteks P300',
        precio: 12000
    }
]

class Computacion {
    constructor(componente){
        this.nombre = componente.nombre;
        this.precio = componente.precio;
    }
}

function mostrarComponentes(){
    let salida = "";
    let i = 1;

    for (let componente of componentes){
        salida += i + "." + componente.nombre + " - $" + componente.precio + "\n";
        i++;
    }
    return salida;
}

function buscarComponentes(){
    seleccionIndice = parseInt(prompt("Elige el número de componente a buscar: \n1.Mouse \n2.Auriculares \n3.Teclados \n4.Gabinetes"));
    let guardar = "Los componentes encontrados son: \n\n";
    switch (seleccionIndice) {
        case 1:
            const buscaMouse = componentes.filter(componente => componente.nombre.includes('Mouse'));
            for (let bMouse of buscaMouse){
                guardar += bMouse.nombre + " - $" + bMouse.precio + "\n";
            }
            alert(guardar);
            break;
        case 2:
            const buscaAuricualares = componentes.filter(componente => componente.nombre.includes('Auriculares'));
            for (let bAuris of buscaAuricualares){
                guardar += bAuris.nombre + " - $" + bAuris.precio + "\n";
            }
            alert(guardar);
            break;
        case 3:
            const buscaTeclado = componentes.filter(componente => componente.nombre.includes('Teclado'));
            for (let bTeclado of buscaTeclado){
                guardar += bTeclado.nombre + " - $" + bTeclado.precio + "\n";
            }
            alert(guardar);
            break;
        case 4:
            const buscaGabinete = componentes.filter(componente => componente.nombre.includes('Gabinete'));
            for (let bGabinete of buscaGabinete){
                guardar += bGabinete.nombre + " - $" + bGabinete.precio + "\n";
            }
            alert(guardar);
            break;
        default:
            alert("La opción ingresada no es correcta, intente nuevamente");
    }
    opciones = prompt("Por favor ingrese el número de opción: \n1.Comprar \n2.Buscar producto \n3.Salir");
}

function agregarAlCarrito(componente){
    carrito.push(componente);
}

function mostrarCarrito(){
    let muestra = "Componentes comprados:\n";
    let total = 0;
    
    for (let componente of carrito){
        muestra += "Componente: " + componente.nombre + " - Precio: $" + componente.precio + "\n";
        total += parseInt(componente.precio);
    }

    muestra += "\nPrecio total: $" + total;
    alert(muestra);
    let divMostrar = document.getElementById("mostrar");
    divMostrar.innerHTML = muestra;
}

function comprarComponente(){
    let salir = "";

    while(salir != 2) {
            let listaComponentes = mostrarComponentes();
            let componenteElegido = parseInt(prompt("Seleccione el número de componente que desea comprar: \n\n" + listaComponentes));
            let comps = componentes[(componenteElegido - 1)]; //porque arranca de cero
            agregarAlCarrito(comps);
            salir = parseInt((prompt("Eliga el número de opción: \n1.Agregar otro componente \n2.Finalizar y ver carrito")));
    }
}

let usuarioNuevo = new Saludar(prompt('Ingresá tu nombre de usuario:'));
alert(usuarioNuevo.saludarlo());

let opciones = prompt("Por favor ingrese el número de opción: \n1.Comprar \n2.Buscar producto \n3.Salir");

while (opciones !== 3){
    if (opciones == 1){
        comprarComponente();
    }
    if (opciones == 2){
        buscarComponentes();
    } else {
        mostrarCarrito();
        opciones = 3;
        alert("Gracias por su compra");
    }
}