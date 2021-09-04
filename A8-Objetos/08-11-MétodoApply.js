//TODO: Método Apply
//*Llamar un método de un objeto desde otro objeto
let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};
//* Uso de call para usa el método persona1.nombreCompleto con los datos de la persona2
console.log(persona1.nombreCompleto());

persona1.nombreCompleto.call(persona2); //! Se llama la función nombreCompleto pero con los datos de la persona2
console.log(persona1.nombreCompleto.call(persona2));
