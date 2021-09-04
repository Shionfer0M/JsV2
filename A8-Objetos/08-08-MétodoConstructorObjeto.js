//TODO: Método constructor objetos
//TODO: UN CONTRUCTOR ES UNA FUNCIÓN ESPECIAL
function Persona(nombre1, apellido1, email1) {
  this.nombre = nombre1; //! El lado derecho es el nombre de la variable
  this.apellido = apellido1;
  this.email = email1;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}
//*VAMOS A REUTILIZAR
let padre = new Persona("Juan", "Perez", "jperez@gmail.com"); //! Este es un objeto
console.log(padre.nombreCompleto());
console.log(padre); //!SE CREA UN OBJETO TOMANDO COMO REFERENCIA LAS PROPIEDADES DEL OBJETO PERSONA
//TODO: SE PUEDE UTILIZAR LAS VECES QUE SE QUIERA
let madre = new Persona("Laura", "Quintero", "lquintero@gmail.com"); //! Este es otro objeto
console.log(madre);

//*Si quieremos hacer un camio a un objeto
//*Cambio en el objeto padre
padre.nombre = "Carlos";
console.log(padre.nombre);
//TODO: Agregar Métodos a un Método Constructor Agregue la fución en el objeto persona

//TODO: OTRAS FORMAS DE CREAR OBJETO
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola"); //!Otra forma
let miCadena2 = "Hola"; //! Otra forma

let miBoolean = new Boolean(false); //! Otra forma
let miBoolean = false; //! Otra forma

let miArreglo1 = new Array(); //! Otra forma
let miArreglo2 = []; //! Otra forma

let miFuncion = new Function(); //! Otra forma para funcón
let miFuncion2 = function () {}; //! Ora forma
