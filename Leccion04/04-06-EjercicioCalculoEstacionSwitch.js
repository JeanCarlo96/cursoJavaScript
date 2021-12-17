/* Cálculo Estación con Switch */

let mes = 1;
let estacion = 'Estación Desconocida';

switch(mes){
    case 1: case 2: case 3:
        estacion = 'Invierno';
        break;
    case 4: case 5: case 6:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
    case 9: case 10: case 11:
        estacion = 'Otoño';
    default:
        estacion = 'Valor Incorrecto';
}

console.log('La estación es: ' + estacion);