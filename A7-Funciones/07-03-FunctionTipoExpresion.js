//TODO: Funciones de tipo expreción es declarar una variable igualarla a una función después llamarla pasando los argumentos
//* Declaración de la función
function miFuncion(a, b) {
  return a + b;
}
//* Llamada a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaración Funcón de tipo Expresión
let x = function (a, b) {
  return a + b;
};
resultado = x(1, 2);
console.log(resultado);
