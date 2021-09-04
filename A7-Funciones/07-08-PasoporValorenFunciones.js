//TODO: PASO POR VALOR Y PASO POR REFERENCIA EN FUNCIONES
//! Tipos que no son objetos
//* Tipos primitivos
let x = 10;

function cambiarValor(a) {
  //a = x;
  a = 20;
}
//Paso por valor
cambiarValor(x); //10
console.log(x);
