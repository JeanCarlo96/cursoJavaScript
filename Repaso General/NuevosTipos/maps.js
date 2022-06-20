/**
 * Maps en JavaScript
 */

// Declaración
let mapa = new Map();

// Agregar valores
mapa.set('nombre', 'Jean');
mapa.set('apellido', 'Marchesini');
mapa.set('edad', 26);

// Imprimiendo el map
console.log(mapa);

// Número de elementos del Map
console.log(mapa.size);

// Comprobar si existe una llave
console.log(mapa.has('correo'));
console.log(mapa.has('nombre'));

// Imprimir solamente una clave
console.log(mapa.get('nombre'));

// Cambiar el valor de una clave
mapa.set('nombre', 'Jean Carlo');
console.log(mapa.get('nombre'));

// Elminar una clave de un Map
mapa.delete('apellido');
console.log(mapa);

// Recorriendo Map
for(let [key, value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}

// En los Maps se pueden ocupar como llaves que no son cadenas
mapa.set(19, 'diecinueve');
mapa.set(false, 'falso');
mapa.set({}, {});

// Recorrido con for of
for(let [clave, valor] of mapa){
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

// Otra forma de agregar elementos a un Map
const mapa2 = new Map([
    ['nombre', 'Ecuador'],
    ['continente', 'America'],
    ['poblacion', 17000000],
    [null, 'nulo']
]);

// Impresión normal
console.log(mapa2);

// Impresión con for of
for(let [clave, valor] of mapa2){
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

// Separar las llaves y los valores
const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2);
console.log(valoresMapa2);