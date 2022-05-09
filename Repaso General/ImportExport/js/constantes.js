// Constantes
export const PI = Math.PI;

export let usuario = "Jhon";

const  password = "qwerty";
// SI quiero exportar por defecto
//export default password;

// SOlo se puede tener una exportación por defecto
//export default function saludar(){
export function saludar(){
    console.log(`Hola Modulos +ES6`);
}

// Exportando una clase
export default class Saludar{
    constructor(){
        console.log("Hola Clases +ES6");
    } 
}