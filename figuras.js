// Código del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
 return lado*4;
}


//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " m");

function areaCuadrado(lado) {
    return lado*lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + " m^2");

console.groupEnd();

//Código del triángulo

console.group("Triángulo");

/* const altura= 5;

const base = 4;

const ladoTriangulo = Math.sqrt((base/2)**2 + altura**2);

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo 
    + " m"
    ); */

function perimetroTriangulo(lado1, lado2, lado2) {
    return lado1 + lado2 + lado3;
} 

//console.log("El perimetro del triángulo es: " + perimetroTriangulo + " m");

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}  

//console.log("El área del triángulo es: " + areaTriangulo + " m^2");

console.groupEnd();

// Código círculo

console.group("Círculo");

/* const RADIO= 5;

console.log(
    "El radio es: " 
    + RADIO 
    + " m"
    ); */

//console.log("El diámetro de circulo es: " + RADIO*2 + " m");

function diametroCirculo(radio) {
    return radio*2
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    return PI*diametroCirculo(radio);
}

//console.log("El perimetro del Círculo es: " + perimetroCirculo + " m");

function areaCirculo(radio) {
    return PI*radio**2;
}
//console.log("El área del Círculo es: " + areaCirculo + " m^2");

console.groupEnd();

//Interactuar con HTML

function calcularPerimetroCuadrado() {
    const inputC = document.getElementById("inputCuadrado");
    let valor = Number(inputC.value);
    let perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const inputC = document.getElementById("inputCuadrado");
    let valor = Number(inputC.value);
    let area = areaCuadrado(valor);
    alert(area);
}