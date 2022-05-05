// Método para cambiar texto cuando se especifica el método en el tag de HTML
// Recibe como parámetro el objeto
function cambiarTexto(titulo){
    // Imprimimos por consola el parámetro enviado
    console.log(titulo);
    // Imprimimos por consola el valor del título
    console.log(titulo.innerHTML);
    // Cambiando el texto del título
    titulo.innerHTML = 'Cambiamos el título';
    // Imprimimos por consola el valor del título
    console.log(titulo.innerHTML);
}

// Recuperamos el título h2
const subt = document.getElementById('subtitulo');
// Usamos la propiedad de onclick
//subt.onclick = () => document.getElementById('subtitulo').innerHTML = 'Este es un nuevo subtítulo'; 
//subt.onclick = cambiarSubtitulo; 
subt.onclick = mostarInformacion; 

function cambiarSubtitulo(){
    document.getElementById('subtitulo').innerHTML = 'Este es un nuevo subtitulo';
}

function mostarInformacion(){
    document.getElementById('mostrar').innerHTML = 'Aquí se muestra el tecto resultante de dar click en el subtítulo';
}