// Función convertir para nombre
function convertirNombre(){
    // Recuperamos el objeto input
    const inputNombre = document.getElementById('nombre');
    // Convertir lo que tiene la caja y transformamos a mayúsculas
    inputNombre.value = inputNombre.value.toUpperCase();
}

// Función para convertir apellido
function convertirApellido(apellido){
    // Convertir todo el texto ingresado en el input apellido a minúscula
    apellido.value = apellido.value.toLowerCase();

}