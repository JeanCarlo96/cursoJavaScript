/* Promesas con Async */
// Si colocamos Async antes de un método, indicamos que está obligado a regresar una promesa

// Promesa con dos parámetros
let promesa1 = new Promise((resolve, reject) => {
    let bandera = true;
    if(bandera){
        resolve('Correcto');
    }else{
        reject('Incorrecto');
    }
});

//promesa1.then(valor => console.log(valor)).catch(error => console.log(error));

// Promesa con un parámetro
let promesa2 = new Promise(resolver => {
    setTimeout(() => resolver('Saludos desde Promesa y Timeout'), 3000);
});

async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));