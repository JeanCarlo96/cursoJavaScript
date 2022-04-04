/**
 * Método que permita validar si dado los lados de un triángulo
 * este es Isésceles
 */
function esTrianguloIsosceles(lado1, lado2){
    if(lado1 != lado2){
        return false;
    }else{
        return true;
    }
}

/**
 * Método que calcula el área de un triángulo
 */
function areaTriangulo(lado1, base){
    let altura = Math.sqrt((Math.pow(lado1, 2) - (base/2)));
    return (base * altura) / 2;
}

/**
 * Método que calcula el perímetro de un triángulo
 */
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function calcularPerimetroTriangulo(){
    let lado1 = Number(document.getElementById("ladoUno").value);
    let lado2 = Number(document.getElementById("ladoDos").value);
    let base = Number(document.getElementById("ladoBase").value);
    if(!esTrianguloIsosceles(lado1, lado2)){
        alert("Las medidas ingresadas no corresponden a un triángulo Isósceles");
    }else{
        alert(`El perímetro del triángulo es: ${perimetroTriangulo(lado1, lado2, base)}`);
    }
}

function calcularAreaTriangulo(){
    let lado1 = Number(document.getElementById("ladoUno").value);
    let lado2 = Number(document.getElementById("ladoDos").value);
    let base = Number(document.getElementById("ladoBase").value);
    if(!esTrianguloIsosceles(lado1, lado2)){
        alert("Las medidas ingresadas no corresponden a un triángulo Isósceles");
    }else{
        alert(`El área del triángulo es: ${areaTriangulo(lado1, base)}`);
    }
}
