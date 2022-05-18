/**
 * ES8
 */
// Permite devolver la clave y los valores de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);

// Cuantos elementos tiene el objeto
console.log(`Cuantos elementos tiene: ${entries.length}`);

// Devuelve los valores de un objeto a un arreglo
const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'
}

const values = Object.values(data);
console.log(values);

// Como agregar elementos a un string
const string = 'hello';
// Al inicio
console.log(string.padStart(7, 'hi'));
// Al final
console.log(string.padEnd(12, '-----'));

// async y await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        let bandera = false;
        (bandera)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))       
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log('Hello');
};

// Ejecutando la función
helloAsync();

const anotherFuction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFuction();