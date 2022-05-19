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
        Swal.fire({
            position: 'bottom-end',
            text: `Por favor complete los campos vacios`,
            color: 'black',
            background: '#DF3731',
            showConfirmButton: false,
            width: '21vw',
            timer: 1500
        })
    }
}

document.getElementById("finalizar").addEventListener("click", validarFormulario);