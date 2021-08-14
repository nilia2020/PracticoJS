// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + " m");

const perimetroCuadrado = ladoCuadrado*4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " m");

const areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log("El área del cuadrado es: " + areaCuadrado + " m^2");

console.groupEnd();

//Código del triángulo

console.group("Triángulo");

const altura= 5;

const base = 4;

const ladoTriangulo = Math.sqrt((base/2)**2 + altura**2);

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo 
    + " m"
    );
const perimetroTriangulo = ladoTriangulo*2+base;

console.log("El perimetro del triángulo es: " + perimetroTriangulo + " m");

const areaTriangulo = base * altura;

console.log("El área del triángulo es: " + areaTriangulo + " m^2");

console.groupEnd();

// Código círculo

console.group("Círculo");

const RADIO= 5;

const ladoCirculo = Math.sqrt((base/2)**2 + altura**2);

console.log(
    "El radio es: " 
    + RADIO 
    + " m"
    );

console.log("El diámetro de circulo es: " + RADIO*2 + " m");

const perimetroCirculo = Math.PI*RADIO*2;

console.log("El perimetro del Círculo es: " + perimetroCirculo + " m");

const areaCirculo = Math.PI*RADIO**2;

console.log("El área del Círculo es: " + areaCirculo + " m^2");

console.groupEnd();