//TODO: Sumar Argumentos
//! Si no aplicamos la función flecha podemos aplicar HOISTING QUE PODEMOS UTILIZAR LA FUNCIÓN ANTES DE SER DECLARADA
let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);
function sumarTodo() {
  let suma = 0;
  //* Para interar
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i]; // suma = suma + arguments[i]
  }
  return suma;
}
