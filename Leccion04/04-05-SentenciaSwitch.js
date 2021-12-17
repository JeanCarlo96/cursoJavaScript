/* Sentencia Switch */

let numero = 3;

let numeroTexto = 'Valor Desconocido';

switch(numero){
    case 1:
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    default:
        numeroTexto = 'Caso no Encontrado';
        break;
}

console.log('El númeor en texto es: ' +  numeroTexto);