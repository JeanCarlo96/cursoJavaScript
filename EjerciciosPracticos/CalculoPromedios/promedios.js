// Lista de notas
const notas = [];

// Método que permita agregar una nota
function agregarNota(nota){
    notas.push(nota);
}

// Método que permita calcular el promedio de notas
function promedioNotas(){
    const sumaNotas = notas.reduce(
        (valorAcumulado = 0, nuevoElemento) => {
            return valorAcumulado + nuevoElemento;
        }
    );
    return sumaNotas / notas.length;
}

// Método que permita saber si una nota ingresada es correcta
// Las notas son número decimales que pueden ir de 0 hasta 20
function notaCorrecta(nota){
    if(nota >= 0 && nota <= 20){
        return true;
    }else{
        return false;
    }
}

// Método que realiza el llamado al método para calcular el promedio y para imprimirlo
function calcularPromedioNotas(){
    if(notas.length == 0){
        alert("No se han encontrado notas con las cuales realizar el promedio");
    }else{
       imprimirPromedio(promedioNotas());
    }
}

function agregarNota(){
    // Ubicamos el elemento que contiene la nota
    const inputNota = document.getElementById("InputNotas");
    // Valor de la nota
    let valorNota = Number(inputNota.value);
    // Verificamos si es correcta la nota ingresada
    if(notaCorrecta(valorNota)){
        notas.push(valorNota);
        imprimirNotas();
    }else{
        alert("La nota ingresada no es correcta");
    }
}

// Método que permite colocar las notas agregadas en el HTML
function imprimirNotas(){
    // Obtenemos el objeto donde se va a colocar las notas
    const pResultado = document.getElementById("PResultados");
    
    // Cadena que contendrá las notas
    let cadenaNotas = "";

    if(notas.length > 0){
        for(let i = 0; i < notas.length; i++){
            if(i == 0){
                cadenaNotas = notas[i];
            }else{
                cadenaNotas += ", " + notas[i];
            }
        }
    }

    pResultado.innerText = "Notas Ingresadas: " + cadenaNotas;
}

// Método que permita colocar el promedio resultante en el HTML
function imprimirPromedio(promedio){
    // Obtenemos el objeto donde se va a colocar las notas
    const pPromedio = document.getElementById("PPromedio");
    // Agregamos el promedio en el elemento
    pPromedio.innerText = "El promedio de las notas es: " + promedio;


}