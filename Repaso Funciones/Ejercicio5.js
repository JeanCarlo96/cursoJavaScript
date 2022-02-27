/* Arrow Function */

// Normal
const saludo = function(){
    console.log("Hola");
}

// Flecha
const saludo2 = () => {
    console.log("Hola con flecha");
}

const saludo3 = () => console.log('Hola con flecha dos');

const saludo4 = (nombre) => console.log('Hola con flecha tres ' + nombre);

const saludo5 = ciudad => console.log('Hola ' + ciudad + ' con flecha cuatro');

// Normal
const sumar = function(a, b, ...c){
    let resultado = a + b;
    c.forEach(function(e){
        resultado += e;
    });
    return resultado;
}

// Flecha
const sumar2 = (a, b, ...c) => {
    let resultado = a + b;
    c.forEach((d) =>{
        resultado += d;
    });
    return resultado;
};

const sumar3 = (a, b) => a + b;

saludo();
saludo2();
saludo3();
saludo4('Jean');
saludo5('Otavalo');

console.log('Suma: ' + sumar(4, 7, 5, 8, 12));
console.log('Suma flecha: ' + sumar2(1, 2, 3, 4));
console.log('Suma flecha dos: ' + sumar3(4, 5));

// Más ejemplos

const funcionDeVariasLineas = () => {
    console.log('Línea 1');
    console.log('Línea 2');
    console.log('Línea 3');
}

funcionDeVariasLineas();

const numeros = [10, 20, 30, 40, 50];
numeros.forEach(numero => console.log(numero));
numeros.forEach((numero, indice) => console.log(indice + ': ' + numero));

const perro = {
    nombre: 'Kenai',
    ladrar1: function(){
        console.log('Guagu Guau ' + this.nombre);
    },
    ladrar2: () => console.log('Guaguuu Guaguuu ' + this.nombre)
}

perro.ladrar1();
perro.ladrar2();