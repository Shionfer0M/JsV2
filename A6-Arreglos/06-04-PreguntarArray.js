//TODO: PREGUNTAR SI ES UN ARRAY HASTA EL ULTIMO
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
//! Modificamos el indice
autos[1] = "MB";
console.log(autos[1]);

//! La funcipon "push()" permite agregar elementos a un arreglo
autos.push("Audi"); //! Se agrega al final del arreglo
console.log(autos);

//! Agregar un elemento en diferente posición
autos[6] = "Porshe"; //! Esta se agrega en el rango 6 pero como comienza en 0 es 5
console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos)); //! Con esto "Array.isArray()" preguntamos si estamos trabajando con un arreglo
console.log(autos instanceof Array); //! También con esto preguntamos
