function mostrarValores(){
    // Recuperando el formulario
    let formulario = document.forms['formulario'];
    let div = document.getElementById('valores');
    let texto = '';
    // Acceder a los elementos en conjunto
    /*
    for(let elemento of formulario){
        texto += elemento.value + '<br/>';
    }*/

    //Acceder a los elementos individualmente
    let nombre = formulario['nombre'];
    let apellido = formulario['apellido'];
    texto = nombre.value + '</br>' + apellido.value;

    // Imprimir los valores recuperados
    div.innerHTML = texto;
}