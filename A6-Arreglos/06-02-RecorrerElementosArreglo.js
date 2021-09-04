// TODO: Acceder a un valor de un arreglo, los arreglos comienzan con 0 -Elemento 0
const autos = ["BMW", "MERCEDEZ BENZ", "VOLVO"]; //! La nueva forma con corchete y const
console.log(autos);
console.log(autos[0]); //! Asi se accede
console.log(autos[2]);
//* RECORRER TODOS LOS ELEMNTOS EN UNA SOLA VEZ UTILIZANDO UN FOR
let i;
for (i = 0; i < autos.length; i++) {
  //! Se pone la palabra length para ocupar el rango del arreglo
  console.log(autos[i]);
}
