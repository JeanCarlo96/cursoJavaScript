/* Promesas con setTimeout */

// En promesas se puiede trabajar solo con un parámetro
let promesa = new Promise((resolve) => {
    console.log('Inicio Promesa');
    setTimeout(() => resolve('Saludos Con Promesa y TimeOut'), 3000);
    console.log('Fin Promesa');
});

promesa.then( valor => console.log(valor));