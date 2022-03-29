/* Objeto Date */

console.log(new Date);

let fecha = new Date();
console.log(fecha);
console.log(`Anio: ${fecha.getFullYear()}`);
console.log(`Mes: ${fecha.getMonth()}`);
console.log(`Dia: ${fecha.getDay()}`);
console.log(`Hora: ${fecha.getHours()}`);
console.log(`Minutos: ${fecha.getMinutes()}`);
console.log(`Segundos: ${fecha.getSeconds()}`);
console.log(`Milisegundos: ${fecha.getMilliseconds()}`);
console.log(`Fecha Entendible: ${fecha.toDateString()}`);
console.log(`Fecha Local: ${fecha.toLocaleDateString()}`);
console.log(`Hora Local ${fecha.toLocaleTimeString()}`);
console.log(`¿Cuantos segundos ha pasado desde el 1 de enero de 1970? ${Date.now()}`);

// Mi cumpleaños
let cumpleanosJean = new Date(1996, 3, 29);
console.log('Mi cumpleaños es: ' + cumpleanosJean);