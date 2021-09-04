//TODO: Parámetros y Argumentos en Funciones
//! Parámetros son las variables que se declaran en una función = funciton (a,b)
//! Mientras que los argumentos son los valores que se pasan en una función = sumar(1,2)

//*Declaración Función de tipo Expresión
// let sumar = function(a=4, b=5){ } Es otra forma de declarar
let sumar = function (a, b) {
  console.log(arguments[0]); //! Imprimira a, ó 1
  console.log(arguments[1]); //! Son los argumetnos que se pasan
  console.log(arguments[2]); //!Porque no se declara  el tercer argumento
  return a + b;
};
resultado = sumar(1, 2);
console.log(resultado);
