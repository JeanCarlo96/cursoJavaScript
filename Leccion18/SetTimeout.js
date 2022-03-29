/* Función setTimeout */

//Función Callback
const imprimir = mensaje => console.log(`Resultado: ${mensaje}`);

function sumar(a, b, imprimir){
    let resultado = a + b;
    imprimir(resultado);
}

// Llamada
sumar(7, 8, imprimir);

// Llamadas asíncronas con uso de setTimeout
function miFuncionCallback(){
    console.log('Saludo asíncrono después de 3 segundos');
}

setTimeout(miFuncionCallback, 3000); // después de tres segundos

setTimeout(function(){console.log('Saludo asíncrono luego de 2 segundos')}, 2000);

setTimeout(() => console.log(`Saludo asíncrono luego de 1 segundo`), 1000);