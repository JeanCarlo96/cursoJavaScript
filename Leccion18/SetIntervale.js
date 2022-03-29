/* setInterval */

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
};

// Llamada de la función cada segundo
setInterval(reloj, 1000);