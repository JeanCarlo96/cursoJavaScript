// Cuadrado
console.group("Cuadrado");

function perimetroCuadrado (lado){
    return 4*lado;
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}

console.groupEnd();

// Triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    let resp = Number(lado1) + Number(lado2) + Number(base);
    return resp;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Código del Círculo
console.group("Círculo");

const PI = Math.PI;

function diametroCirculo(radio){
    return 2 * radio;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (Math.pow(radio, 2) * PI);
}

console.groupEnd();

// Función que cada vez que demos click en un botón
// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("ladoUnoTriangulo").value;
    const lado2 = document.getElementById("ladoDosTriangulo").value;
    const base = document.getElementById("baseTriangulo").value;
    
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(`El perímetro del triángulo es: ${perimetro}`);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("baseTriangulo").value;
    const altura = document.getElementById("alturaTriangulo").value;

    const area = areaTriangulo(base, altura);
    alert(`El área del triángulo es: ${area}`);
}

//Círculo
function calcularPerimetroCirculo(){
    const radio = document.getElementById("radioCirculo").value;
    const perimetro = perimetroCirculo(radio);
    alert(`El perímetro del círculo es: ${perimetro}`);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radioCirculo").value;
    const area = areaCirculo(radio);
    alert(`El área del círculo es: ${area}`);
}
