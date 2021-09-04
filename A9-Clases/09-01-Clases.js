//TODO: Clases es una plantilla
//* UNA CLASE ES UNA PLANTILLA POR EJEMPLO UNA PERSONA ES UNA CLASE
//* DESPUÉS VIENEN LOS OBJETOS QUE ENTRAN EN LA CLASE POR DECIR UNA MUJER Y UN HOMBRE
//* UN OBJETO ES UNA INSTANCIA DE UNA CLASE
//* DEPUÉS LOS OBJETOS TIENEN ATRIBUTOS Y MÉTODOS

class Persona {
  constructor(nombre, apellido1) {
    this.nombre = nombre;
    this.apellido = apellido1;
  }
}
//*Creamos un objeto
let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);
//TODO: TODO ESTO SE CREOO A TRAVES DE LA CLASE
