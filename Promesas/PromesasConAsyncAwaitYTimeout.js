/* Promesas con Async, Await y TimeOut */

async function fucionConPromesaAwaitTimeout(){
    console.log('Inicio Función');
    let miPromesa = new Promise(resolve => {
        setTimeout(() => resolve('Promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('Fin Función');
}

fucionConPromesaAwaitTimeout();