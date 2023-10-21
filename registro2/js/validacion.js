// Validacion nombre

let nombre = document.getElementById('nombre');
let fbNombre = document.getElementById('feedback-nombre');

nombre.addEventListener("change", function() {

    if (nombre.value != "") {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
        fbNombre.classList.remove("invalid-feedback");
        fbNombre.classList.add("valid-feedback");
        fbNombre.innerText = "Nombre válido";
    } else {
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
        fbNombre.classList.remove("valid-feedback");
        fbNombre.classList.add("invalid-feedback");
        fbNombre.innerText = "Este campo es obligatorio.";
    }
})

// Termina validacion nombre jeje

// Valudacion mail

let email = document.getElementById('email');
let fbEmail = document.getElementById('feedback-email');
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

email.addEventListener("change", function() {

    if (email.value != "" && regex.test(email.value) ) {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        fbEmail.classList.remove("invalid-feedback");
        fbEmail.classList.add("valid-feedback");
        fbEmail.innerText = "Email válido";
    } else {
        if (email.value != "" && !regex.test(email.value)) {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        fbNombre.classList.remove("valid-feedback");
        fbEmail.classList.add("invalid-feedback");
        fbEmail.innerText = "Formato de email inválido.";
        } else {
            email.classList.remove("is-valid");
            email.classList.add("is-invalid");
            fbNombre.classList.remove("valid-feedback");
            fbEmail.classList.add("invalid-feedback");
            fbEmail.innerText = "Este campo es obligatorio.";
        }
    }
})