// Módulos
//Importando una constante
import {PI, usuario, saludar} from "./constantes.js";
// Importamos aritmetica
import {aritmetica as calculos} from "./aritmetica.js";
import Saludar from "./constantes.js";

console.log(`Constante PI: ${PI}`);
console.log(usuario);

// Probando los métodos sumar y restar
//console.log(`Sumar: ${aritmetica.sumar(10, 15)}`);
console.log(`Sumar: ${calculos.sumar(10, 15)}`);
//console.log(`Restar: ${aritmetica.restar(10,15)}`);
console.log(`Sumar: ${calculos.restar(10, 15)}`);

// Llamamos al método importado por default}
saludar();

let saludo = new Saludar();
saludo;
