// TODO: La palabra Return regresa el calculo que arrojo una función cuando la llaman
//* Declaración de la función
let resultado;
function miFuncion(a, b) {
  //console.log("Suma: " + (a+b));
  resultado = a + b;
  return resultado; //! Si quiero retorna un valor debno de poner el resulado o el valor que quiro a lado de la palabra return
}
//* Llamando a la función
//miFuncion(2, 3);
console.log(miFuncion(2, 3));
