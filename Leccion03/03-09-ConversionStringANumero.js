let miNumero = '10';

console.log(miNumero);
console.log(typeof(miNumero));

let edad = Number(miNumero);
console.log(edad);
console.log(typeof(edad));

if(edad >= 18) {
    console.log("Puede Votar");
} else {
    console.log("Muy Joven Para Votar");
}

// Usando operador ternario
let resultado = edad >= 18 ? "Puede Votar" : "Muy joven para votar";
console.log(resultado);

// Preguntar si una variable es un número
let valor = '18x';
// Preguntamos si la variable no es un número
if(isNaN(valor)){
    console.log('No es un número');
} else {
    let valorNumerico = Number(valor)
    console.log(valorNumerico);
}

// Operador ternario para verificar si no es un número

let malNumero = '4k';
resultado = isNaN(malNumero) ? 'Este no es un número correcto' : 'Este es un número válido';
console.log(resultado);