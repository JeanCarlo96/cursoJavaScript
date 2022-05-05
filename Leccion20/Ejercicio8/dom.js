// Recuperando el formulario completo
const formulario = document.getElementById('forma');

// Agregando eventos al formulario
// addEventListener tiene un tercer parámetro booleano
// para indicar si es necsesario o no aplicar los mismos eventos a elementos internos
formulario.addEventListener('focus', evento => evento.target.style.background = 'pink', true);
formulario.addEventListener('blur', evento => evento.target.style.background = 'white', true);