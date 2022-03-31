/* Promesas */

// Declaración
let miPromesa = new Promise ((resolver, rechazar) => {
    let expresion = false;
    if(expresion){
        resolver('Resolvió Correcto');
    }else{
        rechazar('Se produjo un error');
    }
});

// Llamada Then
miPromesa.then( 
    valor => console.log(valor), 
    error => console.log(error)
);

// Llamada Catch
miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));