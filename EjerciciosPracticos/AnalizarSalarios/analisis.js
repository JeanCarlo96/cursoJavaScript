// Lista que contendrá el listado de Personas ingresadas
const personas = [];

// Helpers
function promedioLista(lista){
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    });
    return sumaLista / lista.length;
}

function esPar(numero){
    return (numero % 2 === 0);
}

// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = promedioLista([personaMitad1, personaMitad2]);
        return mediana;
    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana General
const salariosCol = colombia.map((persona) => {
    return persona.salary;
});

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => {
    return salaryA - salaryB;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStar = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice(
    spliceStar, 
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});

// Métodos complementarios
function insertarPersona(nombre, sueldo){
    personas.push({nombre: nombre, sueldo: sueldo});
}

// Métodos desde HTML
function agregarPersona(){
    // Identidicación del objeto nombre
    const inputNombre = document.getElementById("InputNombre");
    // Identidicación del objeto sueldo
    const inputSueldo = document.getElementById("InputSueldo");
    // Identificación del objeto Mensaje
    const pMensajeAgregarPersona = document.getElementById("PMensajeAgregarPersona");

    // Validación
    if(inputNombre.value.length == 0 || inputSueldo.value.length == 0){
        alert("Debe llenar todos los campos antes de agregar una persona");
    }else{
        // Valores recuperados
        let valorInputNombre = inputNombre.value;
        let valorInputSueldo = Number(inputSueldo.value);

        insertarPersona(valorInputNombre, valorInputSueldo);

        // Mensaje de Ingreso
        pMensajeAgregarPersona.innerText = "Ingreso Satisfactorio";

        // Limpieza de inputs
        inputNombre.value = "";
        inputSueldo.value = "";
    }
}

function mostrarPersonas(){
    let cadenaPersonas = "";
    if(personas.length == 0){
        cadenaPersonas = "No se ha ingresado ninguna Persona";
    } else{
        cadenaPersonas = "Lista de Personas\n";
        for(let i = 0; i < personas.length; i++){
            cadenaPersonas += "[ nombre: " + personas[i].nombre + ", sueldo: " + personas[i].sueldo + "]";
        }
    }

    // Obtención del objeto del Mensaje
    const pPersonas = document.getElementById("PPersonas");
    pPersonas.innerText = cadenaPersonas;
}

function estadisticos(){
    // Recuperando objeto mensaje
    const pEstadisticos = document.getElementById("PEstadisticos");

    if(personas.length == 0){
        pEstadisticos.innerText = "No se ha ingresado ninguna Persona";
    }else{
        // Lista de sueldos
        const sueldos = personas.map((persona) => {
            return persona.sueldo;
        });
        // Cadena de mensaje
        let cadenaResultado = "Estadísticos:\n"
        // Promedio Sueldos
        let promedioSueldos = promedioLista(sueldos);
        cadenaResultado += "Promedio: " + promedioSueldos + "\n"
        // Mediana
        let medianaSueldos = medianaSalarios(sueldos);
        cadenaResultado += "Mediana: " + medianaSueldos + "\n";
        // Impresión
        pEstadisticos.innerText = cadenaResultado;
    }
}