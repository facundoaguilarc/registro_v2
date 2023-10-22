// Validacion nombre

let nombre = document.getElementById('nombre');
let fbNombre = document.getElementById('feedback-nombre');

nombre.addEventListener("change", function () {

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

email.addEventListener("change", function () {

    if (email.value != "" && regex.test(email.value)) {
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

//Validacion de contraseñas


const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const feedback1 = document.getElementById('passFeedback1');
const feedback2 = document.getElementById('passFeedback2');

pass2.addEventListener("change", () => {
    if ((pass2.value === pass1.value) && (pass1.checkValidity()&&pass2.checkValidity())) {
        feedback2.classList.add("valid-feedback");
        feedback2.classList.remove("invalid-feedback");
        pass2.classList.add('is-valid');
        pass2.classList.remove('is-invalid');
        feedback1.classList.add("valid-feedback");
        feedback1.classList.remove("invalid-feedback");
        pass1.classList.add('is-valid');
        pass1.classList.remove('is-invalid');
        feedback2.innerText = "Las contraseñas coinciden";
        console.log(feedback2.innerText);
    }
    else {
        feedback1.classList.add("invalid-feedback");
        feedback1.classList.remove("valid-feedback");
        pass1.classList.add('is-invalid');
        pass1.classList.remove('is-valid');
        feedback2.classList.add("invalid-feedback");
        feedback2.classList.remove("valid-feedback");
        pass2.classList.add('is-invalid');
        pass2.classList.remove('is-valid');
        feedback2.innerText = "Las contraseñas no coinciden";
    }
})

//Validaciones Checkbox
const checkBox = document.getElementById('terminos');
const checkBoxFeedback = document.getElementById('checkBoxFeedback')
const buttonFeedback = document.getElementById('buttonFeedback');
const buttonTerms = document.getElementById('btnTerms')

checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        checkBox.classList.add("is-valid");
        checkBoxFeedback.classList.add("valid-feedback");
        checkBoxFeedback.innerText = "Estas de acuerdo";
        buttonFeedback.classList.add("valid-feedback");
        buttonTerms.classList.add("is-valid");
        buttonFeedback.innerText = "Estas de Acuerdo";
        console.log(buttonFeedback.innerText)
    }
})


