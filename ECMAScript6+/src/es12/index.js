/**
 * ES12
 */
const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';

// Replase
// Forma anterior, encuentra el primero y lo reemplaza
const replacedString = string.replace('JavaScript', 'Python');
console.log(replacedString);

// Forma Actual
const replacedString2 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString2);

// Métodos Privados, dentro de las clases
class Message {
    // Método Público
    show(val){
        console.log(val);
    }
    // Método Privado
    #gretting(val){
        console.log(val);
    }
}

const message = new Message();
// Llamada al método público
message.show('Hola!');
// Llamada al método privado
//message.gretting('Hello!');

// Promise Any

// Métodos Privados, dentro de las clases
class Message {
    // Método Público
    show(val){
        console.log(val);
    }
    // Método Privado
    #gretting(val){
        console.log(val);
    }
}

const message = new Message();
// Llamada al método público
message.show('Hola!');
// Llamada al método privado
//message.gretting('Hello!');

// Promise Any
const actualPromise1 = new Promise((resolve, reject) => reject('1'));
const actualPromise2 = new Promise((resolve, reject) => resolve('2'));
const actualPromise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([actualPromise1, actualPromise2, actualPromise3])
    .then(response => console.log(response));

// Referencia de forma débil a un objeto
class AnyClass {
    construnctor(element){
        // Referencia débil para el recurso
        // Evita que el elemento sea recogido por el basurero
        this.ref = new WeakRef(element);
    }
}

// Operadores
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

isTrue = true;
isFalse = false;
console.log(isTrue ||= isFalse);

isTrue = undefined;
isFalse = undefined;
console.log(isTrue ??= isFalse);