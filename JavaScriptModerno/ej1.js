//Calculado el índice de masa corporal IMC

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

//* Utilicar la siguiente formula para calcular el IMC (Indice de masa corporal) de Luis y de Carlos,
//* IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos es superior al de Luis.

//TODO: Solución

var imc1 = pesoLuis / alturaLuis ** 2;
console.log(imc1);
var imc2 = pesoCarlos / alturaCarlos ** 2;
console.log(imc2);

var resultado = imc2 > imc1 ? "verdadero" : "falso";
console.log(resultado);

//! Operador ternario
var nombre1 = "Pablo";
var edad = 19;

edad >= 18
  ? console.log(nombre1 + " es mayor de edad")
  : console.log(nombre1 + " es menor de edad");
