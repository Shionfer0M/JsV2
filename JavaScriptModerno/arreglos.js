//************** Operaciones con arreglos

var frutas = ["pera", "manzana", "uva", "sandia"];
console.log(frutas.length);
console.log(frutas[3]);

for (let i = 0; i < frutas.length - 1; i++) {
  console.log(frutas[i]);
}
//* forEach
frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});

//TODO: agregar elemento al array al final

frutas.push("naranja");
console.log(frutas);
//TODO: agregar elemento en el array al inicio
frutas.unshift("fresa");
console.log(frutas);
//*Eliminar el ultimo elemento
frutas.pop();
console.log(frutas);
//*Eliminando el primer elemento
frutas.shift();
console.log(frutas);
//TODO: Saber la posición que ocupa un elemento
var pos = frutas.indexOf("uva");
console.log(pos);
//* Eliminar un elemento o varios elementos a partir de una posición
frutas.splice(1, 1);
console.log(frutas);
//TODO: con reverse() posemos voltear un arreglo
frutas.reverse();
console.log(frutas);
