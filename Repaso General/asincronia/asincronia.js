/**
 * Temporizadores
 */

// setTimeout: Ejecuta una función luego de tantos milisegundos
let temporizador = setTimeout(() => {
     console.log('Ejecutando un setTimeout');
 }, 3000);

 // setInterval: Ejecuta una función varias veces en base de un intervalo de tiempo
 let repeticion = setInterval(() => {
     console.log(new Date().toLocaleTimeString());
 }, 1000);

 // Para cancelar un setTimeout
 clearTimeout(temporizador);

 // Para cancelar un setInterval
 clearInterval(repeticion);