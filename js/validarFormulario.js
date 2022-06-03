function validarFormulario() {
    let nombre = document.querySelector('#nombre').value;
    let direccion = document.querySelector('#direccion').value;
    let numeroDir = document.querySelector('#numeroDir').value;
    let localidad = document.querySelector('#localidad').value;
    let telefono = document.querySelector('#telefono').value;
    let email = document.querySelector('#email').value;

    let emailValidation = document.querySelector('.emailValid');
    //El indexOf es igual al include, verifica si existe ese caracter
    (email.indexOf("@") > -1 && email.indexOf(".") > -1) ? emailValidation.innerHTML = `<span class="campoObligatorio">* </span>` : emailValidation.innerHTML = `<span class="campoObligatorio">* el e-mail ingresado no es correcto</span>`;

    if (nombre.length == 0 || direccion.length == 0 || numeroDir.length == 0 || localidad.length == 0 || telefono.length == 0 || email.length == 0) {
        Toastify({
            text: "Por favor completa los campos obligatorios.",
            duration: 1500,
            style: {
                background: "#DF3731",
            }
            }).showToast();
    }
    document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btnFinalizar.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_j73sz44';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnFinalizar.value = 'Finalizar';
                emailEnviado();
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 3000);
                eliminarCarrito();
            }, (err) => {
                btnFinalizar.value = 'Finalizar';
                alert(JSON.stringify(err));
            });
    });

}

const btnFinalizar = document.getElementById("finalizar");
btnFinalizar.addEventListener("click", validarFormulario);

//EmailJS
function emailEnviado() {
    Toastify({
        text: "El mensaje ha sido enviado correctamente",
        duration: 3000
        }).showToast();
}

emailjs.init('jhwcTeXw26aKnEX3B');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btnFinalizar.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_j73sz44';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnFinalizar.value = 'Finalizar';
                emailEnviado();
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 3000);
                eliminarCarrito();
            }, (err) => {
                btnFinalizar.value = 'Finalizar';
                alert(JSON.stringify(err));
            });
    });