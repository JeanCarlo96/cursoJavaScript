/**
 * 6am - 11 am -> Buenos días
 * 12pm - 18pm -> Buenas tardes
 * 19pm - 24pm -> Buenas noches
 *  0am - 6am -> Durmiendo
 */

let hora = 18;

if(hora >= 6 && hora <= 11){
    console.log('Buenos Días');
} else if(hora >= 12 && hora <= 18){
    console.log('Buenas Tardes');
} else if(hora >= 19 && hora <= 24){
    console.log('Buenas Noches');
} else if(hora >= 0 && hora <= 6){
    console.log('Durmiendo');
}