/**
 * ES9
 */
// Destructuración por partes
const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX'
};

// quiero solo extraer name y el resto que quede como objeto
let {name, ...all} = obj;
console.log(name, all);

// queiro extraer country
let {country, ...all2} = obj;
console.log(country, all2);

// Unir objetos
const obj2 = {
    name: 'Oscar',
    age: 32
};

const obj3 = {
    ...obj2,
    country: 'EC'  
};

console.log(obj3);

// Saber cuando ha finalizado el llamado
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    });
};

// Normal
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'));

// Acceder a Bloques de Datos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(day, month, year);