/* Promesas con Await y Async */
// Await solo se puede usar dentro de una función declarada con async

// Solo Async
async function miFuncionConPromesa(){
    return 'Saludos con Promesa y Async';
}

// miFuncionConPromesa().then( valor => console.log(valor));

// Async con Await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolve => {
        resolve('Promesa con Await');
    });
    console.log(await miPromesa);
}

funcionConPromesaYAwait();