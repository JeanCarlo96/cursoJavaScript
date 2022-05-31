/**
 * ES11
 */
// Dinamic Import
// Llamada al botón
const button = document.getElementById('btn');

button.addEventListener('click', async function(){
    const module = await import('./file.js');
    module.hello();
});

// Big Integer
// Para activar, al final una n
const aBigNumber = 90071992547409991n;
// Segunda forma de activarlo
const anotherBigNumber = BigInt(90071992547409991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Devuelve una promesa que devualve cuando todas las promesas se hayan ejecutado
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve1'));
const promise3 = new Promise((resolve, reject) => resolve('resolve2'));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

// Global this: forma standar de acceder
// Sin navegador no vale
console.log(window);
// Funciona en todas las plataformas
console.log(globalThis);

// Operador nulo
// Pregunta si el valor es nulo
const foo = null ?? 'default string';
console.log(foo);

// Otro ejemplo
const foo2 = 'asd' ?? 'second default string';
console.log(foo2);

// Optional
const user = {};

// supooniendo que en una llamada de una API se va a cargar la información
// Vamos a leer hasta este nivel pero no rompas la aplicación
console.log(user?.profile?.email); // Al no existir coloca undefined

// Otro ejemplo
if(user?.profile?.email){
console.log('email');
} else{
    console.log('fail');
}
