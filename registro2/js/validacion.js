const btnSubmit = document.getElementById('btnSubmit');

// Agrega un controlador de eventos al botón "btnSubmit"
btnSubmit.addEventListener('click', () => {
  // Validación de nombre
  let nombre = document.getElementById('nombre');
  let fbNombre = document.getElementById('feedback-nombre');

  if (nombre.value != "") {
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    fbNombre.classList.remove("invalid-feedback");
    fbNombre.classList.add("valid-feedback");
    fbNombre.innerText = "Nombre válido";
    nombre.setCustomValidity(''); // Restablece el mensaje de validación personalizado
  } else {
    nombre.classList.remove("is-valid");
    nombre.classList.add("is-invalid");
    fbNombre.classList.remove("valid-feedback");
    fbNombre.classList.add("invalid-feedback");
    fbNombre.innerText = "Este campo es obligatorio.";
    nombre.setCustomValidity('Por favor, ingresa tu nombre.');
  }

  // Validación de apellido
  let apellido = document.getElementById('apellido');
  let fbApellido = document.getElementById('feedback-apellido');

  if (apellido.value != "") {
    apellido.classList.remove("is-invalid");
    apellido.classList.add("is-valid");
    fbApellido.classList.remove("invalid-feedback");
    fbApellido.classList.add("valid-feedback");
    fbApellido.innerText = "Apellido válido";
    apellido.setCustomValidity('');
  } else {
    apellido.classList.remove("is-valid");
    apellido.classList.add("is-invalid");
    apellido.setCustomValidity('Ingresa un apellido')
    fbApellido.classList.remove("valid-feedback");
    fbApellido.classList.add("invalid-feedback");
    fbApellido.innerText = "Este campo es obligatorio.";
  }

  // Validación de email
  let email = document.getElementById('email');
  let fbEmail = document.getElementById('feedback-email');
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.value != "" && regex.test(email.value)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    fbEmail.classList.remove("invalid-feedback");
    fbEmail.classList.add("valid-feedback");
    fbEmail.innerText = "Email válido";
    email.setCustomValidity('');
  } else {
    if (email.value != "" && !regex.test(email.value)) {
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
      email.setCustomValidity('Ingresa un email');
      fbNombre.classList.remove("valid-feedback");
      fbEmail.classList.add("invalid-feedback");
      fbEmail.innerText = "Formato de email inválido.";
    } else {
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
    email.setCustomValidity('Ingresa un email');
      fbNombre.classList.remove("valid-feedback");
      fbEmail.classList.add("invalid-feedback");
      fbEmail.innerText = "Este campo es obligatorio.";
    }
  }

  // Validación de contraseñas
  const pass1 = document.getElementById('password1');
  const pass2 = document.getElementById('password2');
  const feedback1 = document.getElementById('passFeedback1');
  const feedback2 = document.getElementById('passFeedback2');

  if ((pass2.value === pass1.value) && (pass1.checkValidity() && pass2.checkValidity())) {
    feedback2.classList.add("valid-feedback");
    feedback2.classList.remove("invalid-feedback");
    pass2.classList.add('is-valid');
    pass2.classList.remove('is-invalid');
    feedback1.classList.add("valid-feedback");
    feedback1.classList.remove("invalid-feedback");
    pass1.classList.add('is-valid');
    pass1.classList.remove('is-invalid');
    feedback2.innerText = "Las contraseñas coinciden";
    pass1setCustomValidity('');
    pass2setCustomValidity('');
  } else {
    feedback1.classList.add("invalid-feedback");
    feedback1.classList.remove("valid-feedback");
    pass1.classList.add('is-invalid');
    pass1.classList.remove('is-valid');
    feedback2.classList.add("invalid-feedback");
    feedback2.classList.remove("valid-feedback");
    pass2.classList.add('is-invalid');
    pass2.classList.remove('is-valid');
    pass1.setCustomValidity('Ingresa una contraseña valida e igual a la de confirmacion');
    pass2.setCustomValidity('Ingresa una contraseña valida e igual a la de confirmacion');
    feedback2.innerText = "Las contraseñas no coinciden";
  }

  // Validación del checkbox
  const checkBox = document.getElementById('terminos');
  const checkBoxFeedback = document.getElementById('checkBoxFeedback');
  const buttonFeedback = document.getElementById('buttonFeedback');
  const buttonTerms = document.getElementById('btnTerms');

  if (checkBox.checked) {
    checkBox.classList.add("is-valid");
    checkBoxFeedback.classList.add("valid-feedback");
    checkBoxFeedback.innerText = "Estás de acuerdo";
    buttonFeedback.classList.add("valid-feedback");
    buttonTerms.classList.add("is-valid");
    buttonFeedback.innerText = "Estás de Acuerdo";
  }
});
