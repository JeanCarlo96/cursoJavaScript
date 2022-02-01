/* Arreglos */

// Declaración antigua
// let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

// Declaración actual
const autos = ['BMW', 'Mercedes Benz', 'Volvo']
console.log(autos)

// Accediendo a los elementos
console.log(autos[0])
console.log(autos[2])

// Recorrer todos los registros
for(let i = 0; i < autos.length; i++){
    console.log(autos[i])
}

// Modificar elementos de un arreglo
autos[1] = 'MercedesBenz'
console.log(autos[1])

// Agregar nuevos elementos a un arreglo
// Al final del arreglo
autos.push('Audi');
console.log(autos)

// Al final del arreglo
autos[autos.length] = 'Cadillac'
console.log(autos)

// Agregando saltando un índice
autos[6] = 'Porche'
console.log(autos)

// Impresión del largo del arreglo
console.log(autos.length)

// Preguntar si es un arreglo
// Tipo
console.log(typeof autos)

// Es arreglo?
console.log(Array.isArray(autos))

// Preguntando si es una instacia de algo
console.log(autos instanceof Array)