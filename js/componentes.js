const componentes = [
    {id:1, nombre:"Gabinete Deepcool 55 Mesh RGB", precio:4000, imagen:"./img/deepcool-55-mesh-rgb.png"},
    {id:2, nombre:"Gabinete Deepcool Matrexx 70 RGB", precio:5000, imagen:"./img/deepcool-matrexx-70rgb.png"},
    {id:3, nombre:"Teclado CoolerMaster MK110", precio:4500, imagen:"./img/coolermaster-mk110-mem-chanical.png"},
    {id:4, nombre:"Teclado HyperX Alloy Core RGB", precio:5500, imagen:"./img/hyperx-alloy-core-rgb.png"},
    {id:5, nombre:"Auriculares Logitech G733 Blue", precio:16000, imagen:"./img/logitech-g733-blue-wireless.png"},
    {id:6, nombre:"Auriculares Logitech G733 Lila", precio:15500, imagen:"./img/logitech-g733-lila-wireless.png"},
    {id:7, nombre:"Placa de video MSI GeForcegt 710", precio:7500, imagen:"./img/msi-geforcegt710.png"},
    {id:8, nombre:"Placa de video Gigabyte RTX 3090", precio:190000, imagen:"./img/gigabyte-rtx3090.png"}
];

//Guardo array en LocalStorage (simula base de datos)
function guardarComponentesLS(componentes) {
    localStorage.setItem("componentes", JSON.stringify(componentes));
}

//Levanto datos desde LocalStorage
function cargarComponentesDesdeLS() {
    return JSON.parse(localStorage.getItem("componentes"));
}