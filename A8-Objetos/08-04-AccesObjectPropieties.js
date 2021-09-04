//TODO: Acceder a las propiedades del objeto
//TODO: Object Creation
//! Other form the object creation
//* Podemos ocupar la palabra reservada NEW para crear objetos
//* Y explicar que necesitamos un espacio en memoria
//?ESTA ES LA MÁS UTILIZADA
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@gmail.com",
  edad: 28,
  nombreCompleeto: function () {
    return this.nombre + " " + this.apellido;
  },
};
let persona2 = new Object(); //! La palabra new Object() crea el objeto en memoria
persona2.nombre = "Carlos"; //! Escribimos las propiedades que queremos agregar
persona2.direccion = "Satruno 15";
persona2.tel = "5581918282";

console.log(persona2.nombre);
console.log(persona2);

//* ACCEDER A LAS PROPIEDADES DE LOS OBJETOS
//! Otra forma de acceder a las propiedades de los objetos
console.log(persona.nombre);
console.log(persona["apellido"]); //! Podemos acceder de esta forma

//* for in PARA ACCEDER A TODAS LA PROPIEDADES DE NUESTRO OBJETO
for (nombrePropiedad in persona) {
  //!Ocupamos in para acceder a todas las propeidades del objeto persona
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}
