/* Manejo de Errores */
'use strict';

// Variable no declarada (Modo Estricto)
//x = 10;
//miFuncion();
//console.log('continuamos...');

// Usamos el bloque ty catch
try{
    //x = 10;
    //miFuncion();
    let y = 20;
} catch (error) {
    console.log(error);
} finally {
    console.log('Me ejecuto independientemente si está o no con error');
}

console.log('continuamos...');

// Claúsula throw
let numero = -5;
if(numero > 0){
    console.log('Número: ' + numero);
}else{
    throw 'Error : Se esperaba un número mayor a 0';
}