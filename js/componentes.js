const componentes = [
    { id: 1, nombre: "Gabinete Deepcool 55 Mesh RGB", precio: 4000, imagen: "./img/deepcool-55-mesh-rgb.png", detalles: "<li>Marca: Deepcool</li> <li>Línea: Mesh</li> <li>Modelo: 55 Mesh RGB</li> <li>Es Gamer: Si</li> <li>Bahías: 2.5 - 3.5</li> <li>Altura: 470 mm</li> <li>Ancho: 230 mm</li> <li>Largo: 452 mm</li> <li>RGB: Si</li> <li>Material: Metal</li> <li>Puertos: ARGB - USB</li> <li>Estructura: Mid Tower</li> <li>Coolers Extra: No</li> <li>Fuente: ATX</li>" },
    { id: 2, nombre: "Gabinete Deepcool Matrexx 70 RGB", precio: 5000, imagen: "./img/deepcool-matrexx-70rgb.png", detalles: "<li>Marca: Deepcool</li> <li>Línea: Air Flow</li> <li>Modelo: Matrexx 70 RGB</li> <li>Es Gamer: Si</li> <li>Bahías: 2.5 - 3.5</li> <li>Altura: 492 mm</li> <li>Ancho: 233 mm</li> <li>Largo: 484  mm</li> <li>RGB: Si</li> <li>Material: Metal</li> <li>Puertos: ARGB - USB</li> <li>Estructura: Mid Tower</li> <li>Coolers Extra: Si (4)</li> <li>Fuente: ATX</li>" },
    { id: 3, nombre: "Teclado CoolerMaster MK110", precio: 4500, imagen: "./img/coolermaster-mk110-mem-chanical.png", detalles: "<li>Marca: CoolerMaster</li> <li>Línea: Semi-Mechanical</li> <li>Modelo: MK110</li> <li>Es Gamer: Si</li> <li>Bluetooth: No</li> <li>Altura: 134 mm</li> <li>Ancho: 440 mm</li> <li>Profundidad: 40.3 mm</li> <li>RGB: Si</li> <li>Material: Metal</li> <li>Inalambrico: No</li> <li>Switch: Linear Mem-Chanical</li> <li>Conexión: USB</li> <li>Peso: 1110 g</li>" },
    { id: 4, nombre: "Teclado HyperX Alloy Core RGB", precio: 5500, imagen: "./img/hyperx-alloy-core-rgb.png", detalles: "<li>Marca: HyperX</li> <li>Línea: Membrana</li> <li>Modelo: Alloy Core</li> <li>Es Gamer: Si</li> <li>Bluetooth: No</li> <li>Altura: 175 mm</li> <li>Ancho: 443 mm</li> <li>Profundidad: 35.6 mm</li> <li>RGB: Si</li> <li>Material: Metal</li> <li>Inalambrico: No</li> <li>Switch: Memb</li> <li>Conexión: USB</li> <li>Peso: 1121 g</li>" },
    { id: 5, nombre: "Auriculares Logitech G733 Blue", precio: 16000, imagen: "./img/logitech-g733-blue-wireless.png", detalles: "<li>Marca: Logitech</li> <li>Línea: G-Series</li> <li>Modelo: G733 Blue</li> <li>Es Gamer: Si</li> <li>Inalámbrico: Si</li> <li>Formato: Headset</li> <li>Micrófono: Si</li> <li>Sensibilidad: 87.5 dB</li> <li>RGB: No</li> <li>Material: Metal/Plastico</li> <li>Inalambrico: Si</li> <li>Dur. Batería: 29 h</li> <li>Unidad de diafragma: 40 mm</li> <li>Carga inalámbrica: Si</li>" },
    { id: 6, nombre: "Auriculares Logitech G733 Lila", precio: 15500, imagen: "./img/logitech-g733-lila-wireless.png", detalles: "<li>Marca: Logitech</li> <li>Línea: G-Series</li> <li>Modelo: G733 Lila</li> <li>Es Gamer: Si</li> <li>Inalámbrico: Si</li> <li>Formato: Headset</li> <li>Micrófono: Si</li> <li>Sensibilidad: 87.5 dB</li> <li>RGB: No</li> <li>Material: Metal/Plastico</li> <li>Inalambrico: Si</li> <li>Dur. Batería: 29 h</li> <li>Unidad de diafragma: 40 mm</li> <li>Carga inalámbrica: Si</li>" },
    { id: 7, nombre: "Placa de video MSI GeForcegt 710", precio: 7500, imagen: "./img/msi-geforcegt710.png", detalles: "<li>Marca: MSI</li> <li>Serie: GeForce</li> <li>Modelo: GT 710</li> <li>Es Gamer: Si</li> <li>Conexión: PCI-Express 2.0</li> <li>Altura: 14.7 cm</li> <li>Ancho: 2 cm</li> <li>Largo: 7 cm</li> <li>RGB: No</li> <li>Material: Metal/Plastico</li> <li>Puertos: VGA - HDMI - DVI</li> <li>Bus de memoria: 64 bit</li> <li>Cantidad de nucleos: 192</li> <li>DirectX: Si</li>" },
    { id: 8, nombre: "Placa de video Gigabyte RTX 3090", precio: 190000, imagen: "./img/gigabyte-rtx3090.png", detalles: "<li>Marca: Gigabyte</li> <li>Línea: Gaming</li> <li>Modelo: RTX 3090</li> <li>Es Gamer: Si</li> <li>Conexión: PCI-Express 4.0</li> <li>Altura: 320 mm</li> <li>Ancho: 129 mm</li> <li>Largo: 55 mm</li> <li>RGB: No</li> <li>Material: Metal/Plastico</li> <li>Puertos: HMI - Display Port</li> <li>Bus de memoria: 384 bit</li> <li>Cantidad de nucleos: 10496</li> <li>DirectX: Si" }
];

//Guardo array en LocalStorage (simula base de datos)
function guardarComponentesLS(componentes) {
    localStorage.setItem("componentes", JSON.stringify(componentes));
}

//Levanto datos desde LocalStorage
function cargarComponentesDesdeLS() {
    return JSON.parse(localStorage.getItem("componentes"));
}

//Ver componente en vercomponente.html
function verComponente(id) {
    localStorage.setItem("ver_componente", id);
    document.location = "vercomponente.html";
}