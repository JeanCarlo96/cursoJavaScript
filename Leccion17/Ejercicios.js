/* Ejercicios Función Flechas */

// Declaración normal
const suma = (a, b, ...c) => {
    let respuesta = a + b;
    c.forEach((numero) => {
        respuesta += numero;
    });
    return respuesta;
}

console.log('Resultado de la suma: ' + suma(1, 2, 3, 4, 5));

// Declaración Simplificada
//1. Saludo
const saludo1 = () => console.log('Hola!!!');

//2. Sumar
const suma2 = (a, b, ...c) => {
    let respuesta = a + b;
    c.forEach((numero) => respuesta += numero);
    return respuesta;
}

//3. Unico Argumento
const saludoCompleto = nombre => console.log('Hola, me llamo ' + nombre);

//4. Unico retorno
const regresaObjeto = () => ({nombre: 'Jean Carlo', apellido: 'Marchesini Antamba'});

saludo1();
console.log('Suma: ' + suma2(10, 8, 8, 8));
saludoCompleto('Jean Carlo');
console.log('Regreso Objeto: ' + regresaObjeto().nombre);