var form = document.getElementById("form-contact");

const enviarMensaje = (event) => {

    event.preventDefault();

    let errors = [];

    let data = {
        nombre: document.getElementById("nombre").value,
        dni: document.getElementById("dni").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value,
    }

    // Validación del nombre (string no vacío).
    if (data.nombre.trim().match(new RegExp("[a-z]", "gi")) === null) {
        errors.push("Complete el nombre correctamente (letras de la A a la Z).");
    }

    // Validación del DNI (nùmero de 7 u 8 dìgitos).
    if ([7, 8].indexOf(data.dni.length) >= 0) {
        if (data.dni.match(new RegExp("[0-9]", "gi")) === null) {
            errors.push("El DNI debe contener números del 0 al 9, sin puntos.");
        }
    } else {
        errors.push("El DNI debe contener entre 7 a 8 números.");
    }

    // Validación del email (regex).
    if (data.email.trim().match(new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$", "gi")) === null) {
        errors.push("El email ingresado no es correcto.");
    }

    // Validación del mensaje (string vacío, caracteres mín:10 / máx:500).
    if (data.mensaje.trim() === "") {
        errors.push("Por favor, ingrese un mensaje.");
    } else {
        if (data.mensaje.length < 10) {
            errors.push("El mensaje debe contener al menos 10 caracteres.");
        } else {
            if (data.mensaje.length > 500) {
                errors.push("El mensaje no puede superar los 500 caracteres.");
            }
        }
    }

    if (errors.length > 0) {
        alert(`• ${errors.join("\n• ")}`);
    }
    else
    {
        alert("El mensaje fue enviado.");
    }
}

form.addEventListener("submit", (e) => {
    enviarMensaje(e);
});