//TODO: Agregar o eliminar las propiedades de un objeto
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@gmail.com",
  edad: 28,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
console.log(persona.nombreCompleto());
persona.tel = "5443322"; //! ASI SE AÑADE UN OBJETO
console.log(persona);

delete persona.tel; //! Así se borra un propiedad y valor agregado en el objeto
console.log(persona);
