/* Operador Corto Circuito */
// Conjunto de operadores
//Or: Cuando el valor de la izquierda en la expresión siempre pueda
//validar a true, es el valor que se cargará por defecto
//And: Cuando el valor de la izquierda en la expresión siempre pueda validar
//a false, es el valor que se cargará por defecto

function saludar(nombre){
    // En caso de que nombre no esté definido, cargo Desconocido
    nombre = nombre || "Desconocido";
    console.log('Hola ' + nombre);
}

// Or
saludar("Jhon");
saludar();
console.log("cadena"||"Desconocido");
console.log(19||"Valor de la derecha");
console.log(false||"Valor de la derecha");
console.log(""||"Valor de la derecha");

// And

console.log("cadena"&&"Desconocido");
console.log(19&&"Valor de la derecha");
console.log(false&&"Valor de la derecha");
console.log(""&&"Valor de la derecha");