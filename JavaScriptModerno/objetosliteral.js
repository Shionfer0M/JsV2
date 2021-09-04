//TODO: Objetos de forma literal

var persona = {
  nombre: "Pablo",
  apellido: "Vásquez",
  gustos: ["Futbool", "Peliculas", "Inglés"],
  trabajo: "Instructor",
  esCasado: true,
};

console.log(persona);
//* Formas de imprimir
console.log(persona.nombre);

console.log(persona["trabajo"]);

//* Mutación
persona.esCasado = false;
console.log(persona.esCasado);
