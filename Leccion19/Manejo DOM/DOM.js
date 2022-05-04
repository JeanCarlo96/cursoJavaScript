/**
 *  DOM: Document Object Model
 */
console.log("Saludos Desde JS");

// Accediendo a objetos del HTML
let header = document.getElementById("header");
let cabecero = document.getElementById('cabecero');
let parrafo = document.getElementById('parrafo1');


console.log('Valor cabecero: ' + header.innerHTML);
console.log('Valor parrafo: ' + cabecero.innerHTML);
console.log("Valor header: " + parrafo.innerHTML);

// Asignando un nuevo valor 
cabecero.innerHTML = "Ejemplo cambio de valor de Cabecero";
parrafo.innerHTML = "Nuevo valor del párrafo";

// Recuperar elementos del DOM por nombre del tag
// Recuperando Párrafos
let parrafos = Array.from(document.getElementsByTagName('p'));

console.log(`Número de párrafos: ${parrafos.length}`);

parrafos.forEach(elemento => console.log(elemento.innerHTML));

for(let i = 0; i < parrafos.length; i++){
    console.log(parrafos[i].innerHTML);
}

// Obtener objetos que tienen una misma clase
let elementos = Array.from(document.getElementsByClassName('azul'));

elementos.forEach((elemento, indice) => console.log(`${indice} => ${elemento.innerHTML}`));

// Extraccion de elementos por tipo de elemento y clase que tiene
// Recupera párrafos con el estilo azul
elementos = document.querySelectorAll('p.azul');
for(let elemento of elementos){
    console.log(`${elemento.innerHTML}`);
}