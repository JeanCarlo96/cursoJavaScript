// Variable que almacenará la lista de números
const numeros = [];

// Métodos Utilitarios
function obtenerCadenaDeElementosDeUnaLista(lista){
    let cadenaLista = "";
    for(let i = 0; i < lista.length; i++){
        if(i == 0){
            cadenaLista = lista[i];
        }else{
            cadenaLista += ", " + lista[i];
        }
    }
    return cadenaLista;
}

// Métodos de HTML
    // Método que permite agregar un nuevo número a la Lista
function agregarNumero(){
    // Obteniendo el objeto que tiene el número
    const inputNumero = document.getElementById("InputNumero");
    // Obteniendo el valor ingresado
    let valorInputNumero = Number(inputNumero.value);
    // Agregando el número a la lista
    numeros.push(valorInputNumero);
}

function mostrarLista(){
    // Obtenemos el objeto donde se va a colocar la lista
    const pLista = document.getElementById("PLista");
    // Variable que almacenará la cadena con los elementos de la lista
    const cadenaLista = obtenerCadenaDeElementosDeUnaLista(numeros);
    // Impresión de la cadena de números en HTML
    pLista.innerText = "Lista Original: " + cadenaLista;
}

function ordenarLista(){
    // Obtenemos el objeto donde se va a colocar la lista ordenada
    const pListaOrdenada = document.getElementById("PListaOrdenada");
    // Variable que almacenará la cadena con los elementos de la lista ordenada
    const cadenaListaOrdenada = obtenerCadenaDeElementosDeUnaLista(numeros.sort());
    // Impresión de la cadena de números ordenada en HTML
    pListaOrdenada.innerText = "Lista Ordenada: " + cadenaListaOrdenada;
}