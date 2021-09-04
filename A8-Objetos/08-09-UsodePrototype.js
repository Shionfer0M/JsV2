//TODO: Uso de prototype
//*Agregar una propiedad a todos los objetos sin necesidad de agregarla al Contructor objeto de Persona
function Persona(nombre1, apellido1, email1) {
  this.nombre = nombre1; //! El lado derecho es el nombre de la variable
  this.apellido = apellido1;
  this.email = email1;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}
//*VAMOS A AGREGAR LA PROPIEDAD CELULAR A TODOS LOS OBJETOS DESPUÉS
Persona.prototype.cel = "443322"; //! Este valor se agrega a todos los objetos
//*VAMOS A REUTILIZAR
let padre = new Persona("Juan", "Perez", "jperez@gmail.com"); //! Este es un objeto
padre.cel = "11223344"; //!MODIFICAR PROTOTYPE PERO SOLO PARA EL PADRE
console.log(padre.nombreCompleto());
console.log(padre); //!SE CREA UN OBJETO TOMANDO COMO REFERENCIA LAS PROPIEDADES DEL OBJETO PERSONA
//TODO: SE PUEDE UTILIZAR LAS VECES QUE SE QUIERA
let madre = new Persona("Laura", "Quintero", "lquintero@gmail.com"); //! Este es otro objeto
console.log(madre);
