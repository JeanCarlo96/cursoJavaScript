// Recuperando los elementos 
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputEdad = document.getElementById('edad');

// Agregamos un evento al elemento
// Evento focus
// Para esta forma no se usa el on - simplemente focus
inputNombre.addEventListener('focus', cambiar);
function cambiar(evento){
    // Recuperamos el objeto con el que interactuamos
    let componente = evento.target;
    componente.style.background = 'yellow';
}

// Evento blur
inputNombre.addEventListener('blur', regresar);
function regresar(evento){
    // Recuperamos el objeto con el que interactuamos
    let componente = evento.target;
    componente.style.background = 'white';
}

// Añadimos los eventos al componente inputApellido
inputApellido.addEventListener('focus', cambiar);
inputApellido.addEventListener('blur', regresar);

// Añadiendo un evento al input Edad con funciones flecha
inputEdad.addEventListener('focus', evento => evento.target.style.background = 'green');
inputEdad.addEventListener('blur', evento => evento.target.style.background = 'white');