/**
 * Set en JavaScript
 */
const set = new Set([1, 2, 3, 3, 3, 4, 5, true, false, {}, {}, 'hola', 'HOLA']);
console.log(set);

// Longuitud de un set
console.log('Tamaño del set: ' + set.size);

const set2 = new Set();
// Agregando valores al set
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(false);
set2.add({});

console.log(set2);
console.log(set2.size);

// Recorrer un Set
// 1. For of
console.log('For Of');
for ( item of set) {
    console.log(item);
}

// For each
console.log('For Each');
set2.forEach(item => console.log(item));

// Acceder una posición en específico
// Convertir el set a array
let arr = Array.from(set);

// imprimiendo posición 0
console.log(arr[0]);
// imprimiendo posición 9
console.log(arr[9]);

// Eliminar valores de un set
set.delete('HOLA');
console.log('Impresión de Set sin HOLA');
console.log(set);

// Comprobación de existencia de un dato
console.log(set.has('hola'));
console.log(set.has(19));

// Limpiar el set
set2.clear();
console.log(set2);
console.log(set2.size);

// Destructuración
let person = {
    name: 'Jean',
    lastName: 'Marchesini',
    age: 26,
};

let {name, lastName, age} = person;
console.log(name, lastName, age);

(() => {
    console.log('Función Autoejecutable');
})();