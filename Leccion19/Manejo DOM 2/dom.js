// Envía información directamente al DOM
document.write('Saludos desde JavaScript');

// Función saludar
// Si se manda un document.write luego de lo que cargó la página
// este sobreescribe lo que tenía previamente cargado
function saludar(){
    document.write('Hola Mundo!!');
}

// Función para cambiar el título
function cambiarTitulo(){
    // Recuperando el objeto h1
    const titulo = document.getElementById("titulo");

    // Cambiamos el valor del título
    titulo.innerHTML = 'Nuevo Título';
}

// Función para cambiar una imagen
function cambiarImagen(){
    // Recuperando el objeto img
    const img = document.getElementById("imagen");

    // Agregando una nueva ruta de imagen
    img.src = 'https://services.meteored.com/img/article/cuantos-azules-tiene-el-cielo-289011-2_1024.jpg';
}

// Método para cambiar el color del título
function cambiarColorTitulo(){
    // Recuperando el objeto título
    const titulo = document.getElementById('titulo');

    // Cambiando el color
    titulo.style.color = 'blue';
}