
let a = 3, b = 2, c = 1, d = 4

//Se evalúa de izquierda a derecha
let z = a * b + c
console.log(z)

//Toma mayor prioridad la multiplicación frente a la suma
z = c + a * b
console.log(z)

//Se ejecutan división y multiplicación y luego se suman
z = a * b + c / d
console.log(z)

//Primero multiplicación, luego división y termina en suma
z = c +a * b / d
console.log(z)

//Los paréntesis modifican el orden
z = (c + a) * b / c
console.log(z)