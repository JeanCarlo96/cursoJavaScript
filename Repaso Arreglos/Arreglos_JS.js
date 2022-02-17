/* Arreglos */

// Declaración
const a = [];
console.log(a);

const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(b);

// longitud del arreglo
console.log(b.length);

// Accediendo un elemento en particular
console.log(b[3]);
console.log(b[3][1]);
console.log(b[3][3][2]);

// Forma dos de crear arreglos
const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);
console.log(c.length);

// Forma tres de crear arrelos
const d = Array(100).fill(false);
console.log(d);
console.log(d.length);

// Forma antigua que nadie usa
const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);
console.log(f.length);

// Métodos con arreglo
const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

// Colocar al final
colores.push("Negro");
console.log(colores);

// Quita el último elemento
colores.pop();
console.log(colores);

// For Each: Ejecuta una función por cada elemento del arreglo
colores.forEach(function (color, index){
    console.log(index + ': ' + color);
});
