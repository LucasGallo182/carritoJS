const componentes = [
    { id: 1, nombre: "NOTEBOOK BANGHO MAX L4 I1 F CELERON 5205U", precio: 43990, imagen: "./img/01.png", detalles: "<li>Almacenamiento: SSD 120Gb</li> <li>Procesador: Intel Celeron 5205U</li> <li>Nucleos: 2</li> <li>Gaming: Casual</li> <li>Arquitectura, Diseño, Edición: Basico</li> <li>Hogar, Oficina: Basico</li> <li>Windows 10: Compatible</li> <li>Versión: 64-bits</li> <li>Usb 2.0: Sí</li> <li>Hdmi: Sí</li> <li>Audio/Mic 3.5: Sí</li> <li>Tamaño: 14''</li> <li>Resolucion: 1366 x 768</li> <li>Tecnologia: HD, LED</li>", tipo: 1 },
    { id: 2, nombre: "NOTEBOOK LENOVO IP 1-14IGL0 CELERON N4020", precio: 52990, imagen: "./img/02.png", detalles: "<li>Almacenamiento: 64Gb Emmc</li> <li>Procesador: Intel Celeron N4020</li> <li>Nucleos: 2</li> <li>Gaming: Casual</li> <li>Arquitectura, Diseño, Edición: Basico</li> <li>Hogar, Oficina: Basico</li> <li>Windows 10: Compatible</li> <li>Versión: 64-bits</li> <li>Usb 2.0: Sí</li> <li>Hdmi: Sí</li> <li>Audio/Mic 3.5: Sí</li> <li>Tamaño: 14''</li> <li>Resolucion: 1366 x 768</li> <li>Tecnologia: HD, LED</li>", tipo: 1 },
    { id: 3, nombre: "NOTEBOOK LENOVO S145-15AST AMD A4 9125", precio: 64990, imagen: "./img/03.png", detalles: "<li>Almacenamiento: HDD 500Gb</li> <li>Procesador: AMD A4</li> <li>Nucleos: 2</li> <li>Gaming: Casual</li> <li>Arquitectura, Diseño, Edición: Basico</li> <li>Hogar, Oficina: Basico</li> <li>Windows 10: Compatible</li> <li>Versión: 64-bits</li> <li>Usb 2.0: Sí</li> <li>Hdmi: Sí</li> <li>Audio/Mic 3.5: Sí</li> <li>Tamaño: 15.6'</li> <li>Resolucion: 1366 x 768</li> <li>Tecnologia: HD, LED</li>", tipo: 1 },
    { id: 4, nombre: "NOTEBOOK HP 240-G8 I3 1005G1 8GB 1TB 14", precio: 72990, imagen: "./img/04.png", detalles: "<li>Almacenamiento: HDD 1Tb</li> <li>Procesador: Intel Core i3 1005G1</li> <li>Nucleos: 2</li> <li>Gaming: Casual</li> <li>Arquitectura, Diseño, Edición: Intermedio</li> <li>Hogar, Oficina: Avanzado</li> <li>Windows 10: Compatible</li> <li>Versión: 64-bits</li> <li>Usb 2.0: Sí</li> <li>Hdmi: Sí</li> <li>Audio/Mic 3.5: Sí</li> <li>Tamaño: 14''</li> <li>Resolucion: 1366 x 768</li> <li>Tecnologia: HD</li>", tipo: 2 },
    { id: 5, nombre: "NOTEBOOK HP 245 G8 RYZEN 3 5300U", precio: 75990, imagen: "./img/05.png", detalles: "<li>Almacenamiento: HDD 1Tb</li> <li>Procesador: AMD Ryzen 3 5300U</li> <li>Nucleos: 4</li> <li>Gaming: Dedicado</li> <li>Arquitectura, Diseño, Edición: Intermedio</li> <li>Hogar, Oficina: Avanzado</li> <li>Windows 10: Compatible</li> <li>Versión: 64-bits</li> <li>Usb 2.0: Sí</li> <li>Hdmi: Sí</li> <li>Audio/Mic 3.5: Sí</li> <li>Tamaño: 14''</li> <li>Resolucion: 1366 x 768</li> <li>Tecnologia: HD</li>", tipo: 2 },
    { id: 6, nombre: "NOTEBOOK HP 240-G8 I5 1035G1 8GB 1TB 14", precio: 89990, imagen: "./img/06.png", detalles: "<li>Almacenamiento: HDD 1Tb</li> <li>Procesador: Intel Core i5 1035G1</li> <li>Nucleos: 4</li> <li>Gaming: Casual</li> <li>Arquitectura, Diseño, Edición: Intermedio</li> <li>Hogar, Oficina: Avanzado</li> <li>Windows 10: Compatible</li> <li>Versión: 64-bits</li> <li>Usb 2.0: Sí</li> <li>Hdmi: Sí</li> <li>Audio/Mic 3.5: Sí</li> <li>Tamaño: 14''</li> <li>Resolucion: 1366 x 768</li> <li>Tecnologia: HD</li>", tipo: 2 },
    { id: 7, nombre: "NOTEBOOK ASUS TUF FX506LH HN002 I5 10300H", precio: 172990, imagen: "./img/07.png", detalles: "<li>Almacenamiento: SSD 512Gb</li> <li>Procesador: Intel Core i5 10300H</li> <li>Nucleos: 4</li> <li>Gaming: Dedicado</li> <li>Arquitectura, Diseño, Edición: Avanzado</li> <li>Hogar, Oficina: Avanzado</li> <li>Windows 10: Compatible</li> <li>Versión: 64-bits</li> <li>Usb 2.0: Sí</li> <li>Hdmi: Sí</li> <li>Audio/Mic 3.5: Sí</li> <li>Tamaño: 15.6''</li> <li>Resolucion: 1920 x 1080</li> <li>Tecnologia: FHD, LED</li>", tipo: 3 },
    { id: 8, nombre: "NOTEBOOK GIGABYTE G5 15 I5 11400H RTX3050", precio: 217990, imagen: "./img/08.png", detalles: "<li>Almacenamiento: SSD 512Gb</li> <li>Procesador: Intel Core i5 11400H</li> <li>Nucleos: 6</li> <li>Gaming: Dedicado</li> <li>Arquitectura, Diseño, Edición: Avanzado</li> <li>Hogar, Oficina: Avanzado</li> <li>Windows 10: Compatible</li> <li>Versión: 64-bits</li> <li>Usb 2.0: Sí</li> <li>Hdmi: Sí</li> <li>Audio/Mic 3.5: Sí</li> <li>Tamaño: 15.6''</li> <li>Resolucion: 1920 x 1080</li> <li>Tecnologia: FHD, LCD</li>", tipo: 3 }
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