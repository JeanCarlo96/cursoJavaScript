/**
 * Implementación Sobre node
 * Requiere de una instalación: npm install xmlhttprequest --save
 */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// URL del API
const API = 'https://rickandmortyapi.com/api/character';

function fetchData(url_api, callback){
    // Instancia
    let xhttp = new XMLHttpRequest();
    // Llamado a una URL
    // 1. Tipo Petición
    // 2. URL
    // 3. Activar Asincronismo
    xhttp.open('GET', url_api, true);
    //Escuchar la conexión
    xhttp.onreadystatechange = function (event) {
        // Validación de estado satisfactorio
        // Validar si ya se ha completado
        if(xhttp.readyState === 4){
            // Verificar status
            if(xhttp.status === 200){
                // Por estandar el primer parámetro es el error
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

// Llamado a la función
fetchData(API, function(error1, data1){
    // Validación de que llegue el error
    if(error1) return console.error(error1);
    //Obtener el primer elementos
    fetchData(API + '/' + data1.results[0].id, function (error2, data2) {
        // Validación de que llegue el error
        if(error2) return console.log(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            // Validación de que llegue el error
            if(error3) return console.log(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});