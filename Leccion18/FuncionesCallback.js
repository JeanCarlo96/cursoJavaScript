/* Funciones Callback */

// Funciones Normales
function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

// Funciones Callback
function imprimir(mensaje){
    console.log(`Resultado: ${mensaje}`);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(res);
}


// Llamada Normal
miFuncion1();
miFuncion2();

// Llamada Callback
sumar(5, 3, imprimir);