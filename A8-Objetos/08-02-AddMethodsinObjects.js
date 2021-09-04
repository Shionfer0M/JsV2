//TODO: Agregar Métodos a Objetos
//! Agrega runmétodo para imprimir un nombre completo

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@gamil.com",
  edad: 28,
  nombreCompleto: function () {
    //! podemos crear una función
    return this.nombre + " " + this.apellido; //!Con this podemos acceder a las propiedades del mismo objeto
  },
};

console.log(persona.nombreCompleto()); //! Mandamos a llamar el método pero el método esta dentro del objeto lo cual es una función
