/* Sumar todos los argumentos */
let resultado = sumarTodo(5, 4, 13 , 9, 11)
console.log('Resultado: ' + resultado)

function sumarTodo(){
    let suma = 0
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]
    }
    return suma
}