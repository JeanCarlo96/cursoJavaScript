/* Modo Strict */
"use strict";

//x = 10; Error por que no está definida
let x = 10;
console.log(x);

// Si no estuviera definido me saldría error
miFuncion();

function miFuncion(){
    // Si quisiearmos usar el modo estricto dentro de una función
    // colocamos la línea "use strict"; como primera línea
    let y = 15;
    console.log(y);
}